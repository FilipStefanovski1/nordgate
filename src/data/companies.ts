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
  /** Set when the logo's own colors are too light to read once grayscaled — renders it on a small dark chip for contrast. */
  needsDarkChip?: boolean;
};

/**
 * Populate with real, confirmed companies and their logo assets before this
 * section goes live. Place logo files in /public/images/company-logos/ and
 * reference them here. The marquee renders nothing while this array is
 * empty, so it stays hidden rather than showing placeholder or invented
 * companies.
 */
export const companies: Company[] = [
  {
    name: "ABSL",
    logo: "/images/company-logos/absl.webp",
    alt: "ABSL logo",
  },
  {
    name: "BPF Group",
    logo: "/images/company-logos/bpf-group.png",
    alt: "BPF Group logo",
  },
  {
    name: "EaseAccess",
    logo: "/images/company-logos/easeaccess24.svg",
    alt: "EaseAccess logo",
  },
  {
    name: "Simtech Solutions",
    logo: "/images/company-logos/simtech-solutions.png",
    alt: "Simtech Solutions logo",
  },
  {
    name: "Swedish–Macedonian Chamber of Commerce",
    logo: "/images/company-logos/smcc.png",
    alt: "Swedish–Macedonian Chamber of Commerce logo",
  },
  {
    name: "Blockchain Skopje",
    logo: "/images/company-logos/blockchain-skopje.png",
    alt: "Blockchain Skopje logo",
  },
];
