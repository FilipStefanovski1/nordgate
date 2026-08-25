import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, localeHreflang, type Locale } from "@/i18n/routing";
import type { pathnames } from "@/i18n/routing";

const BASE = "https://thenordgate.com";

type AppPathname = keyof typeof pathnames;

/**
 * Self-referencing canonical plus a full hreflang set for one page, so every
 * localized variant points at its siblings and English stays x-default.
 */
export function buildAlternates(pathname: AppPathname, locale: Locale): Metadata["alternates"] {
  const languages: Record<string, string> = {};

  for (const l of routing.locales) {
    languages[localeHreflang[l]] = BASE + getPathname({ href: pathname, locale: l });
  }
  languages["x-default"] = BASE + getPathname({ href: pathname, locale: routing.defaultLocale });

  return {
    canonical: BASE + getPathname({ href: pathname, locale }),
    languages,
  };
}
