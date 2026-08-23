export type Company = {
  /** Company name, used for alt text and accessible link labels. */
  name: string;
  /** Path to a transparent-background SVG or PNG logo in /public/companies/. */
  logo: string;
  /** Optional link to the company's website. */
  href?: string;
  /** Accessible alt text describing the logo. */
  alt: string;
  /** Optional label describing the nature of the relationship (client, partner, community, etc.). */
  relationship?: string;
};

/**
 * Populate with real, confirmed companies and their logo assets before this
 * section goes live. Place logo files in /public/companies/ and reference
 * them here. The marquee renders nothing while this array is empty, so it
 * stays hidden rather than showing placeholder or invented companies.
 */
export const companies: Company[] = [];
