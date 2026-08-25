"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowUpRight, Check, Loader2, TriangleAlert } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";
import { initialContactFormState, type ContactFormState } from "@/lib/contact/state";
import { nordicMarketOptions } from "@/lib/contact/schema";
import { cn } from "@/lib/utils/cn";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
  currentMarket: string;
  nordicMarkets: string[];
  goal: string;
  message: string;
};

const emptyValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  website: "",
  currentMarket: "",
  nordicMarkets: [],
  goal: "",
  message: "",
};

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
  const baseClass = cn(
    "mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-blue-600",
    error ? "border-red-400" : "border-border-strong"
  );
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-700">
        {label}
        {required && <span className="text-blue-600"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={4}
          className={baseClass}
          aria-invalid={Boolean(error)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className={baseClass}
          aria-invalid={Boolean(error)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-nordgate group mt-8 inline-flex h-[50px] items-center gap-2.5 rounded px-6 text-[15px] font-semibold disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          Sending
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        </>
      ) : (
        <>
          Discuss market entry
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState<ContactFormState, FormData>(submitContactForm, initialContactFormState);
  const [values, setValues] = useState<FormValues>(emptyValues);
  const errors = state.fieldErrors ?? {};

  const setField = (name: keyof FormValues) => (value: string) => setValues((prev) => ({ ...prev, [name]: value }));

  // Clear the form once a submission succeeds — derived during render (rather
  // than in an effect) so it can't cascade an extra render.
  const [clearedForStatus, setClearedForStatus] = useState<ContactFormState["status"] | null>(null);
  if (state.status === "success" && clearedForStatus !== state.status) {
    setClearedForStatus(state.status);
    setValues(emptyValues);
  }

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-border-soft bg-bg-soft p-10 text-center" role="status">
        <div className="btn-nordgate mx-auto flex h-12 w-12 items-center justify-center rounded-full">
          <Check className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="mt-6 text-lg font-semibold text-ink-900">Thank you. We&apos;ll be in touch shortly.</p>
        <p className="mt-2 text-sm text-ink-500">
          A member of the NordGate team will review your details and reach out to discuss next steps.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-2xl border border-border-soft bg-white p-8 sm:p-10" noValidate>
      {/* Honeypot — hidden from real users, catches simple bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website_2">Leave this field empty</label>
        <input id="company_website_2" name="company_website_2" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="First name" name="firstName" required error={errors.firstName} value={values.firstName} onChange={setField("firstName")} />
        <Field label="Last name" name="lastName" required error={errors.lastName} value={values.lastName} onChange={setField("lastName")} />
        <Field label="Work email" name="email" type="email" required error={errors.email} value={values.email} onChange={setField("email")} />
        <Field label="Company" name="company" required error={errors.company} value={values.company} onChange={setField("company")} />
        <Field label="Company website" name="website" type="url" error={errors.website} value={values.website} onChange={setField("website")} />
        <Field label="Current market" name="currentMarket" value={values.currentMarket} onChange={setField("currentMarket")} />
      </div>

      <div className="mt-6">
        <label htmlFor="nordicMarkets" className="text-sm font-medium text-ink-700">
          Nordic market(s) of interest
        </label>
        <select
          id="nordicMarkets"
          name="nordicMarkets"
          multiple
          value={values.nordicMarkets}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              nordicMarkets: Array.from(e.target.selectedOptions, (o) => o.value),
            }))
          }
          className="mt-2 h-32 w-full rounded-lg border border-border-strong bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-blue-600"
        >
          {nordicMarketOptions.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <Field
          label="What are you trying to achieve?"
          name="goal"
          as="textarea"
          required
          error={errors.goal}
          value={values.goal}
          onChange={setField("goal")}
        />
      </div>

      <div className="mt-6">
        <Field label="Message (optional)" name="message" as="textarea" error={errors.message} value={values.message} onChange={setField("message")} />
      </div>

      {state.status === "error" && (
        <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      )}

      <SubmitButton />
    </form>
  );
}
