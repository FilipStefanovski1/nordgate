import type { pathnames } from "@/i18n/routing";

/** Internal (English) pathname; next-intl resolves it to the localized slug. */
export type AppHref = keyof typeof pathnames;

export type NavLink = {
  /** Translation key inside the relevant namespace. */
  key: string;
  href: AppHref;
  /** Optional in-page anchor, kept separate so the href stays typed. */
  hash?: string;
};

export const primaryNav: NavLink[] = [
  { key: "services", href: "/nordic-market-entry" },
  { key: "approach", href: "/how-it-works" },
  { key: "about", href: "/about" },
];

/** External Google Calendar booking page — every "Book a meeting" CTA opens
 *  this directly, in a new tab, rather than routing to the contact form. */
export const headerCta = {
  key: "bookMeeting",
  href: "https://calendar.app.google/KGMrBcRV6UitHaDb6",
} as const;

/** Footer groups: `key` resolves in the `footer` namespace. */
export const footerNav: { titleKey: string; links: NavLink[] }[] = [
  {
    titleKey: "company",
    links: [
      { key: "about", href: "/about" },
      { key: "team", href: "/about", hash: "team" },
      { key: "contact", href: "/contact" },
    ],
  },
  {
    titleKey: "services",
    links: [
      { key: "nordicMarketEntry", href: "/nordic-market-entry" },
      { key: "salesExecution", href: "/nordic-market-entry", hash: "sales-execution" },
      { key: "businessDevelopment", href: "/nordic-market-entry" },
      { key: "internationalCapabilities", href: "/capabilities" },
    ],
  },
  {
    titleKey: "resources",
    links: [
      { key: "howItWorks", href: "/how-it-works" },
      { key: "roiCalculator", href: "/how-it-works", hash: "calculator" },
      { key: "insights", href: "/insights" },
    ],
  },
];
