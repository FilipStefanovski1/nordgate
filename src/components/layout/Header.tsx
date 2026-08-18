"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav, headerCta } from "@/data/navigation";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 20);
    return () => window.clearTimeout(id);
  }, []);

  // Close the mobile menu when the route changes — derived during render
  // (rather than in an effect) so it can't cascade an extra render.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setOpen(false);
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
  // header's own py/border change instantly when `open` flips, ahead of
  // its 300ms color/background transition).
  useLayoutEffect(() => {
    if (!open || !headerRef.current) return;
    setHeaderHeight(headerRef.current.getBoundingClientRect().height);
  }, [open]);

  // Only the homepage has a full-bleed dark hero for the nav to sit
  // transparently over. Every other page keeps the solid header immediately.
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300",
        transparent
          ? "border-transparent bg-transparent py-5"
          : scrolled
            ? "border-border-soft bg-white/90 backdrop-blur-sm py-2.5"
            : "border-border-soft bg-white py-4",
        isHome && "transition-opacity duration-700 motion-reduce:transition-none",
        isHome && !mounted && "opacity-0"
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo variant={transparent ? "white" : "color"} />

        <nav className="hidden xl:flex items-center gap-6" aria-label="Primary">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[13px] font-medium uppercase tracking-wide transition-colors duration-200",
                  transparent
                    ? active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : active
                      ? "text-blue-700"
                      : "text-ink-700 hover:text-blue-700"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href={headerCta.href}
            className={cn(
              "inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200",
              transparent
                ? "border-white/50 text-white hover:border-white hover:bg-white/10"
                : "border-navy-950 bg-navy-950 text-white hover:bg-blue-700 hover:border-blue-700"
            )}
          >
            {headerCta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200",
            transparent ? "border-white/40 text-white" : "border-border-soft text-ink-900"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div
          className="xl:hidden fixed inset-x-0 bottom-0 z-40 bg-white"
          style={{ top: headerHeight || undefined }}
        >
          <div className="flex h-full flex-col justify-between overflow-y-auto px-6 py-10">
            <nav className="flex flex-col gap-1" aria-label="Mobile primary">
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-border-soft py-4 text-2xl font-semibold text-ink-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-10 flex flex-col gap-4">
              <Link
                href={headerCta.href}
                className="inline-flex items-center justify-center rounded-md bg-blue-700 px-6 py-4 text-base font-semibold text-white"
              >
                {headerCta.label}
              </Link>
              <p className="coord-label text-center text-ink-400">
                Copenhagen · Stockholm · Skopje
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
