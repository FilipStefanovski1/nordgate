import { z } from "zod";

export const contactTopics = [
  "marketEntry",
  "validation",
  "sales",
  "capabilities",
  "other",
] as const;
export type ContactTopic = (typeof contactTopics)[number];

/**
 * Server-side schema. Messages are translation KEYS (resolved in the visitor's
 * locale on the server) rather than English strings, so a Swedish visitor never
 * sees an English validation error.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(1, "validationName").max(120, "validationTooLong"),
  email: z
    .string()
    .trim()
    .min(1, "validationEmailRequired")
    .email("validationEmail")
    .max(200, "validationTooLong"),
  company: z.string().trim().min(1, "validationCompany").max(200, "validationTooLong"),
  topic: z.enum(contactTopics, { message: "validationTopic" }),
  message: z.string().trim().min(1, "validationMessage").max(4000, "validationTooLong"),
  consent: z.literal(true, { message: "validationConsent" }),
  // Context for the notification email — not shown to the visitor.
  locale: z.string().max(5).optional(),
  page: z.string().max(300).optional(),
  // Honeypot: real users never fill this in.
  company_website_2: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
