"use client";

import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils/cn";

/**
 * Text-label language menu (no flags — a flag is a country, not a language).
 * Switching keeps the visitor on the equivalent page: next-intl resolves the
 * current internal pathname to the target locale's slug, and we carry the
 * query string and hash across.
 */
export function LanguageSwitcher({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const t = useTranslations("nav");
  const active = useLocale() as Locale;
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, close]);

  function selectLocale(next: Locale) {
    close();
    const query = searchParams.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- pathname comes from the typed route map at runtime
        { pathname, params, query: query ? Object.fromEntries(searchParams) : undefined },
        { locale: next }
      );
      if (hash && typeof window !== "undefined") {
        window.setTimeout(() => {
          window.location.hash = hash;
        }, 0);
      }
    });
  }

  const light = tone === "light";

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("chooseLanguage")}
        className={cn(
          "inline-flex h-[42px] items-center gap-1.5 rounded px-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          light
            ? "text-white/80 hover:text-white focus-visible:outline-white"
            : "text-ink-700 hover:text-blue-700 focus-visible:outline-blue-600"
        )}
      >
        {localeLabels[active]}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t("language")}
          className={cn(
            "absolute right-0 z-50 mt-1 min-w-[150px] overflow-hidden rounded border py-1 shadow-sm",
            light ? "border-white/15 bg-[var(--nordgate-navy)]" : "border-border-soft bg-white"
          )}
        >
          {locales.map((l) => {
            const current = l === active;
            return (
              <li key={l} role="option" aria-selected={current}>
                <button
                  type="button"
                  onClick={() => selectLocale(l)}
                  lang={l}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2",
                    light
                      ? "text-white/75 hover:bg-white/10 hover:text-white focus-visible:outline-white"
                      : "text-ink-700 hover:bg-bg-soft hover:text-ink-900 focus-visible:outline-blue-600",
                    current && (light ? "text-white" : "text-blue-700")
                  )}
                >
                  {localeLabels[l]}
                  {current && <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
