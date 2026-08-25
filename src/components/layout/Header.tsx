"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav, headerCta } from "@/data/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

const MENU_ID = "mobile-nav-menu";

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Close the mobile menu when the route changes — derived during render
  // (rather than in an effect) so it can't cascade an extra render.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Keep the mobile menu's top offset pixel-accurate against the header's
  // actual rendered height, measured fresh at the moment it opens (the
  // header's own py change instantly when `open` flips, ahead of its
  // 300ms padding transition).
  useLayoutEffect(() => {
    if (!open || !headerRef.current) return;
    setHeaderHeight(headerRef.current.getBoundingClientRect().height);
  }, [open]);

  // Keyboard: Escape closes; Tab is trapped inside the panel while open.
  useEffect(() => {
    if (!open) return;
    const panel = menuPanelRef.current;

    const focusables = () =>
      panel
        ? Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
        : [];

    // Move focus into the panel as soon as it opens.
    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b transition-[padding,background-color] duration-300",
        open ? "mobile-menu-gradient border-white/10" : "border-border-soft bg-white",
        scrolled ? "py-2.5" : "py-3.5"
      )}
    >
      <Container className="relative flex items-center justify-between gap-6">
        <Logo variant={open ? "white" : "color"} />

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <nav className="flex items-center gap-6" aria-label={t("primaryLabel")}>
            {primaryNav.map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                className={cn(
                  "link-underline text-sm font-medium transition-colors duration-200",
                  pathname === entry.href ? "text-blue-700" : "text-ink-700 hover:text-blue-700"
                )}
              >
                {t(entry.key)}
              </Link>
            ))}
          </nav>

          <LanguageSwitcher />

          <Button href={headerCta.href} compact>
            {t("bookMeeting")}
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            open
              ? "text-white hover:bg-white/10 focus-visible:outline-white"
              : "text-navy-950 hover:bg-navy-950/5 focus-visible:outline-blue-600"
          )}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
          aria-controls={MENU_ID}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </Container>

      {open && (
        <div
          id={MENU_ID}
          ref={menuPanelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t("mobileNavLabel")}
          className="mobile-menu-gradient lg:hidden fixed inset-x-0 bottom-0 z-40 overflow-hidden"
          style={{ top: headerHeight || undefined }}
        >
          <div className="mobile-menu-noise" aria-hidden="true" />

          <div
            className="relative z-10 flex h-full flex-col overflow-y-auto px-6"
            style={{ paddingBottom: "calc(20px + env(safe-area-inset-bottom))" }}
          >
            <nav aria-label={t("mobilePrimaryLabel")} className="mt-[110px] sm:mt-[130px]">
              <ul className="flex flex-col">
                {primaryNav.map((entry, i) => (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between gap-4 py-3.5"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="coord-label" style={{ color: "var(--hero-accent)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="text-[clamp(1.5rem,6vw,2.25rem)] font-medium leading-tight"
                          style={{ color: "var(--hero-heading)" }}
                        >
                          {t(entry.key)}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-1 border-b border-white/15" />
              <p className="mt-5 text-sm text-white/50">{t("tagline")}</p>
            </nav>

            <div className="mt-auto flex flex-col gap-4 pt-10">
              <div className="flex justify-start">
                <LanguageSwitcher tone="light" />
              </div>
              <Button href={headerCta.href} variant="inverse" className="w-full" onClick={closeMenu}>
                {t("bookMeeting")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
