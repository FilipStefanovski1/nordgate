import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, localeHreflang, pathnames, type Locale } from "@/i18n/routing";

const BASE = "https://thenordgate.com";
const ROUTES = Object.keys(pathnames) as (keyof typeof pathnames)[];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.flatMap((route) =>
    routing.locales.map((locale) => {
      const languages: Record<string, string> = {};
      for (const l of routing.locales) {
        languages[localeHreflang[l]] = BASE + getPathname({ href: route, locale: l });
      }
      languages["x-default"] =
        BASE + getPathname({ href: route, locale: routing.defaultLocale });

      return {
        url: BASE + getPathname({ href: route, locale: locale as Locale }),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: route === "/" ? 1 : 0.7,
        alternates: { languages },
      };
    })
  );
}
