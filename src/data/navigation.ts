import type { pathnames } from "@/i18n/routing";

/** Internal (English) pathname; next-intl resolves it to the localized slug. */
export type AppHref = keyof typeof pathnames;

export type NavLink = {
  /** Translation key inside the relevant namespace. */
  key: string;
  href: AppHref;
  /** Optional in-page anchor, kept separate so the href stays typed. */
  hash?: string;
  /** Other internal pathnames that belong to this tab's route family and
   *  should also mark it active (e.g. Capabilities is part of Services). */
  activeOn?: AppHref[];
};

export const primaryNav: NavLink[] = [
  { key: "services", href: "/nordic-market-entry", activeOn: ["/capabilities"] },
  { key: "approach", href: "/how-it-works" },
  { key: "about", href: "/about" },
];

/**
 * Single source of truth for which primary-nav tab is active, shared by the
 * desktop and mobile menus so the route-family mapping above is defined
 * exactly once. `pathname` is next-intl's internal (locale-agnostic) path.
 */
export function isNavLinkActive(pathname: string, entry: NavLink): boolean {
  return pathname === entry.href || (entry.activeOn?.includes(pathname as AppHref) ?? false);
}

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
