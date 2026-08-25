"use server";

import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import { contactSchema } from "@/lib/contact/schema";
import { getResendClient, isEmailConfigured, escapeHtml } from "@/lib/email/resend";
import type { ContactFormState } from "@/lib/contact/state";
import { routing } from "@/i18n/routing";

/**
 * Best-effort in-memory guards, scoped to one server instance. The primary
 * protections are the disabled submit button and the honeypot; these just
 * blunt repeated automated posts.
 */
const recentSubmissions = new Map<string, number>();
const rateBuckets = new Map<string, { count: number; resetAt: number }>();
const DUPLICATE_WINDOW_MS = 30_000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60_000;

/** Coarse, privacy-conscious identifier — never stored or logged. */
async function requestKey(): Promise<string> {
  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  const ua = h.get("user-agent") ?? "";
  let hash = 0;
  const raw = `${ip}|${ua}`;
  for (let i = 0; i < raw.length; i++) hash = (hash * 31 + raw.charCodeAt(i)) | 0;
  return String(hash);
}

function rateLimited(key: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT;
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
    topic: formData.get("topic")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    consent: formData.get("consent") === "on" || formData.get("consent") === "true",
    locale: formData.get("locale")?.toString() || undefined,
    page: formData.get("page")?.toString() || undefined,
    company_website_2: formData.get("company_website_2")?.toString() || "",
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", messageKey: "errorFields", fieldErrors };
  }

  const data = parsed.data;

  // Honeypot tripped — accept silently without sending anything.
  if (data.company_website_2) return { status: "success" };

  const locale = routing.locales.includes(data.locale as never)
    ? (data.locale as string)
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "email" });

  const key = await requestKey();
  if (rateLimited(key)) return { status: "error", messageKey: "errorDuplicate" };

  const dedupeKey = `${key}:${data.email.toLowerCase()}`;
  const last = recentSubmissions.get(dedupeKey);
  if (last && Date.now() - last < DUPLICATE_WINDOW_MS) {
    return { status: "error", messageKey: "errorDuplicate" };
  }

  if (!isEmailConfigured()) {
    // Controlled failure — never leak configuration detail to the visitor.
    console.error("[contact] Email delivery is not configured (RESEND_API_KEY / CONTACT_TO_EMAIL).");
    return { status: "error", messageKey: "errorGeneric" };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL!;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Nordgate Website <forms@send.thenordgate.com>";

  const submittedAt = new Date().toISOString();
  const topicLabel = data.topic;
  const rows: [string, string][] = [
    [t("labelSubmitted"), submittedAt],
    [t("labelName"), data.name],
    [t("labelEmail"), data.email],
    [t("labelCompany"), data.company],
    [t("labelTopic"), topicLabel],
    [t("labelPage"), data.page ?? "-"],
    [t("labelLanguage"), locale],
  ];

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${t("labelMessage")}:\n${data.message}`;
  const html =
    `<table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${escapeHtml(k)}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`
      )
      .join("") +
    `</table><p style="font-family:system-ui,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${escapeHtml(data.message)}</p>`;

  const resend = getResendClient();

  // 1. Internal notification. Success is only reported once THIS is accepted.
  const notification = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: data.email,
    subject: t("notifySubject", { name: data.company || data.name }),
    text,
    html,
  });

  if (notification.error) {
    console.error("[contact] Notification delivery failed:", notification.error.name);
    return { status: "error", messageKey: "errorGeneric" };
  }

  recentSubmissions.set(dedupeKey, Date.now());

  // 2. Visitor confirmation. A failure here must not lose the enquiry.
  try {
    const confirmation = await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: t("confirmSubject"),
      text: `${t("confirmGreeting", { name: data.name })}\n\n${t("confirmBody")}\n\n${t("confirmSignoff")}`,
    });
    if (confirmation.error) {
      console.error("[contact] Confirmation delivery failed:", confirmation.error.name);
    }
  } catch {
    console.error("[contact] Confirmation delivery threw.");
  }

  return { status: "success" };
}
