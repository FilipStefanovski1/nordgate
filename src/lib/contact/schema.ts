import { z } from "zod";

export const nordicMarketOptions = ["Sweden", "Denmark", "Norway", "Finland", "Not sure yet"] as const;

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().min(1, "Work email is required").email("Enter a valid email address").max(200),
  company: z.string().trim().min(1, "Company is required").max(200),
  website: z
    .string()
    .trim()
    .max(200)
    .optional()
    .refine((val) => !val || /^https?:\/\/.+\..+/i.test(val), "Enter a valid website URL"),
  currentMarket: z.string().trim().max(200).optional(),
  nordicMarkets: z.array(z.string()).optional(),
  goal: z.string().trim().min(1, "Tell us what you're trying to achieve").max(2000),
  message: z.string().trim().max(2000).optional(),
  // Honeypot — real users never fill this in.
  company_website_2: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
