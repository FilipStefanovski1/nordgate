export type ContactFormState = {
  status: "idle" | "success" | "error";
  /** Translation key in the `contact` namespace, resolved by the client. */
  messageKey?: string;
  /** Field name -> translation key in the `contact` namespace. */
  fieldErrors?: Record<string, string>;
};

export const initialContactFormState: ContactFormState = { status: "idle" };
