"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Check, Loader2, TriangleAlert } from "lucide-react";
import { submitContactForm } from "@/app/[locale]/contact/actions";
import { initialContactFormState, type ContactFormState } from "@/lib/contact/state";
import { contactTopics } from "@/lib/contact/schema";
import { cn } from "@/lib/utils/cn";

const CONTACT_EMAIL = "info@thenordgate.com";
const CONTACT_PHONE = "+45 52 58 65 80";

function Field({
  label,
  name,
  type = "text",
  required,
  as = "input",
  error,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  error?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const errorId = `${name}-error`;
  const base = cn(
    "mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-blue-600",
    error ? "border-red-400" : "border-border-strong"
  );
  const shared = {
    id: name,
    name,
    required,
    className: base,
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": error ? errorId : undefined,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
  };

  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-700">
        {label}
        {required && <span className="text-blue-600"> *</span>}
      </label>
      {as === "textarea" ? <textarea rows={5} {...shared} /> : <input type={type} {...shared} />}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SubmitButton() {
  const t = useTranslations("contact");
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-nordgate mt-8 inline-flex h-[50px] w-full items-center justify-center gap-2.5 rounded px-6 text-[15px] font-semibold disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? (
        <>
          {t("sending")}
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        </>
      ) : (
        t("submit")
      )}
    </button>
  );
}

export function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const pathname = usePathname();
  const [state, formAction] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    initialContactFormState
  );
  const statusRef = useRef<HTMLDivElement>(null);
  const consentId = useId();

  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  });
  const set = (k: keyof typeof values) => (v: string) => setValues((p) => ({ ...p, [k]: v }));
  const errors = state.fieldErrors ?? {};
  const err = (k: string) => (errors[k] ? t(errors[k]) : undefined);

  // Move focus to the status message so it is announced and reachable.
  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-border-soft bg-bg-soft p-10 text-center"
      >
        <div className="btn-nordgate mx-auto flex h-12 w-12 items-center justify-center rounded-full">
          <Check className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="mt-6 text-lg font-semibold text-ink-900">{t("successTitle")}</p>
        <p className="mt-2 text-sm text-ink-500">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-2xl border border-border-soft bg-white p-8 sm:p-10" noValidate>
      {/* Context for the notification email */}
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="page" value={pathname} />

      {/* Honeypot — hidden from real users, catches simple bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website_2">{t("honeypotLabel")}</label>
        <input id="company_website_2" name="company_website_2" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label={t("nameLabel")} name="name" required error={err("name")} value={values.name} onChange={set("name")} />
        <Field label={t("emailLabel")} name="email" type="email" required error={err("email")} value={values.email} onChange={set("email")} />
        <Field label={t("companyLabel")} name="company" required error={err("company")} value={values.company} onChange={set("company")} />

        <div>
          <label htmlFor="topic" className="text-sm font-medium text-ink-700">
            {t("topicLabel")}
            <span className="text-blue-600"> *</span>
          </label>
          <select
            id="topic"
            name="topic"
            required
            value={values.topic}
            onChange={(e) => set("topic")(e.target.value)}
            aria-invalid={errors.topic ? true : undefined}
            aria-describedby={errors.topic ? "topic-error" : undefined}
            className={cn(
              "mt-2 h-[46px] w-full rounded-lg border bg-white px-4 text-sm text-ink-900 outline-none transition-colors focus:border-blue-600",
              errors.topic ? "border-red-400" : "border-border-strong"
            )}
          >
            <option value="">{t("topicPlaceholder")}</option>
            {contactTopics.map((topic) => (
              <option key={topic} value={topic}>
                {t(`topic${topic.charAt(0).toUpperCase()}${topic.slice(1)}`)}
              </option>
            ))}
          </select>
          {errors.topic && (
            <p id="topic-error" className="mt-1.5 text-xs text-red-600">
              {t(errors.topic)}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <Field
          label={t("messageLabel")}
          name="message"
          as="textarea"
          required
          error={err("message")}
          value={values.message}
          onChange={set("message")}
        />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id={consentId}
          name="consent"
          type="checkbox"
          required
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? `${consentId}-error` : undefined}
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--nordgate-navy)]"
        />
        <div>
          <label htmlFor={consentId} className="text-sm leading-relaxed text-ink-700">
            {t("consent")}
          </label>
          {errors.consent && (
            <p id={`${consentId}-error`} className="mt-1 text-xs text-red-600">
              {t(errors.consent)}
            </p>
          )}
        </div>
      </div>

      {state.status === "error" && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          className="mt-6 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <div>
            <p>{t(state.messageKey ?? "errorGeneric")}</p>
            {state.messageKey !== "errorFields" && (
              <p className="mt-1">
                {t.rich("errorFallback", {
                  email: () => <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">{CONTACT_EMAIL}</a>,
                  phone: () => <a href="tel:+4552586580" className="font-semibold underline">{CONTACT_PHONE}</a>,
                })}
              </p>
            )}
          </div>
        </div>
      )}

      <SubmitButton />
    </form>
  );
}
