import { defineRouting } from "next-intl/routing";

/**
 * Nordgate speaks four languages. English stays unprefixed so every existing
 * URL and inbound link keeps working; the other three sit behind a prefix.
 * Norwegian Bokmål is `nb` internally (correct BCP 47) but is published under
 * `/no`, which is what Norwegian visitors expect to see.
 */
export const locales = ["en", "sv", "da", "nb"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Flag shown beside each label in the switcher. Decorative — the text
 *  label is what screen readers announce. */
export const localeFlags: Record<Locale, string> = {
  en: "\u{1F1EC}\u{1F1E7}",
  sv: "\u{1F1F8}\u{1F1EA}",
  da: "\u{1F1E9}\u{1F1F0}",
  nb: "\u{1F1F3}\u{1F1F4}",
};

/** Public-facing label for the language switcher, in its own language. */
export const localeLabels: Record<Locale, string> = {
  en: "English",
  sv: "Svenska",
  da: "Dansk",
  nb: "Norsk",
};

/** BCP 47 tags used for `hreflang`, `<html lang>` and Open Graph. */
export const localeHreflang: Record<Locale, string> = {
  en: "en",
  sv: "sv-SE",
  da: "da-DK",
  nb: "nb-NO",
};

export const localeOpenGraph: Record<Locale, string> = {
  en: "en_US",
  sv: "sv_SE",
  da: "da_DK",
  nb: "nb_NO",
};

/**
 * Localized slugs. Keys are the internal (English) pathname; each locale gets
 * a natural local slug rather than a translated-sounding one.
 */
export const pathnames = {
  "/": "/",
  "/nordic-market-entry": {
    en: "/nordic-market-entry",
    sv: "/tjanster",
    da: "/ydelser",
    nb: "/tjenester",
  },
  "/how-it-works": {
    en: "/how-it-works",
    sv: "/arbetssatt",
    da: "/vores-tilgang",
    nb: "/slik-jobber-vi",
  },
  "/about": {
    en: "/about",
    sv: "/om-oss",
    da: "/om-os",
    nb: "/om-oss",
  },
  "/capabilities": {
    en: "/capabilities",
    sv: "/kapacitet",
    da: "/kapacitet",
    nb: "/kapasitet",
  },
  "/insights": {
    en: "/insights",
    sv: "/insikter",
    da: "/indsigter",
    nb: "/innsikt",
  },
  "/contact": {
    en: "/contact",
    sv: "/kontakt",
    da: "/kontakt",
    nb: "/kontakt",
  },
} as const;

export const routing = defineRouting({
  locales,
  defaultLocale,
  // English keeps clean unprefixed URLs; sv/da/no are always prefixed.
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      nb: "/no",
    },
  },
  pathnames,
  // Respect an explicit choice (cookie) but never force a redirect purely
  // from Accept-Language on a first visit.
  localeDetection: false,
});
