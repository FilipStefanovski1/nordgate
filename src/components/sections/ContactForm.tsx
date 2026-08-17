"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const nordicMarkets = ["Sweden", "Denmark", "Norway", "Finland", "Not sure yet"];

function Field({
  label,
  name,
  type = "text",
  required,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
}) {
  const baseClass =
    "mt-2 w-full rounded-lg border border-border-strong bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-blue-600";
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-700">
        {label}
        {required && <span className="text-blue-600"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea id={name} name={name} required={required} rows={4} className={baseClass} />
      ) : (
        <input id={name} name={name} type={type} required={required} className={baseClass} />
      )}
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire to NordGate's CRM/email endpoint when available.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border-soft bg-bg-soft p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white">
          <Check className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="mt-6 text-lg font-semibold text-ink-900">Thank you — we&apos;ll be in touch shortly.</p>
        <p className="mt-2 text-sm text-ink-500">
          A member of the NordGate team will review your details and reach out to discuss next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border-soft bg-white p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Company" name="company" required />
        <Field label="Company website" name="website" type="url" />
        <Field label="Current market" name="currentMarket" />
      </div>

      <div className="mt-6">
        <label htmlFor="nordicMarkets" className="text-sm font-medium text-ink-700">
          Nordic market(s) of interest
        </label>
        <select
          id="nordicMarkets"
          name="nordicMarkets"
          multiple
          className="mt-2 h-32 w-full rounded-lg border border-border-strong bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-blue-600"
        >
          {nordicMarkets.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <Field label="What are you trying to achieve?" name="goal" as="textarea" required />
      </div>

      <div className="mt-6">
        <Field label="Message (optional)" name="message" as="textarea" />
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
      >
        Discuss market entry
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
