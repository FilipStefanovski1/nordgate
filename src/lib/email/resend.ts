import { Resend } from "resend";

let client: Resend | null = null;

/** Lazily constructed so a missing key fails at send-time, not at build/import time. */
export function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  if (!client) {
    client = new Resend(apiKey);
  }
  return client;
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
}
