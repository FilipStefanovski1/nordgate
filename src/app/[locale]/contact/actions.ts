"use server";

import { contactSchema } from "@/lib/contact/schema";
import { getResendClient, isEmailConfigured } from "@/lib/email/resend";
import type { ContactFormState } from "@/lib/contact/state";

// Best-effort duplicate-submission guard, scoped to a single server instance.
// The primary guard is disabling the submit button while the action is pending.
const recentSubmissions = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 30_000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    firstName: formData.get("firstName")?.toString() ?? "",
    lastName: formData.get("lastName")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
    website: formData.get("website")?.toString() || undefined,
    currentMarket: formData.get("currentMarket")?.toString() || undefined,
    nordicMarkets: formData.getAll("nordicMarkets").map(String),
    goal: formData.get("goal")?.toString() ?? "",
    message: formData.get("message")?.toString() || undefined,
    company_website_2: formData.get("company_website_2")?.toString() || "",
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const data = parsed.data;

  // Honeypot tripped — pretend success without sending anything.
  if (data.company_website_2) {
    return { status: "success", message: "Thank you. We'll be in touch shortly." };
  }

  const dedupeKey = data.email.toLowerCase();
  const lastSubmitted = recentSubmissions.get(dedupeKey);
  if (lastSubmitted && Date.now() - lastSubmitted < DUPLICATE_WINDOW_MS) {
    return {
      status: "error",
      message: "We've already received a message from you moments ago. We'll be in touch shortly.",
    };
  }

  if (!isEmailConfigured()) {
    console.error(
      "[contact] Submission received but email delivery is not configured. " +
        "Set RESEND_API_KEY and CONTACT_TO_EMAIL to enable delivery.",
      { from: data.email, company: data.company }
    );
    return {
      status: "error",
      message: "We couldn't send your message right now. Please try again shortly.",
    };
  }

  try {
    const resend = getResendClient();
    const toEmail = process.env.CONTACT_TO_EMAIL!;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "NordGate Website <onboarding@resend.dev>";

    const marketsLine = data.nordicMarkets && data.nordicMarkets.length > 0 ? data.nordicMarkets.join(", ") : "Not specified";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `New market entry inquiry — ${data.company}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
        ${data.website ? `<p><strong>Website:</strong> ${escapeHtml(data.website)}</p>` : ""}
        ${data.currentMarket ? `<p><strong>Current market:</strong> ${escapeHtml(data.currentMarket)}</p>` : ""}
        <p><strong>Nordic market(s) of interest:</strong> ${escapeHtml(marketsLine)}</p>
        <p><strong>What they're trying to achieve:</strong><br/>${escapeHtml(data.goal).replace(/\n/g, "<br/>")}</p>
        ${data.message ? `<p><strong>Message:</strong><br/>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>` : ""}
      `,
    });

    if (error) {
      console.error("[contact] Resend API error:", error);
      return {
        status: "error",
        message: "We couldn't send your message right now. Please try again shortly.",
      };
    }

    recentSubmissions.set(dedupeKey, Date.now());
    return { status: "success", message: "Thank you. We'll be in touch shortly." };
  } catch (err) {
    console.error("[contact] Unexpected error sending message:", err);
    return {
      status: "error",
      message: "We couldn't send your message right now. Please try again shortly.",
    };
  }
}
