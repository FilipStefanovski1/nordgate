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
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

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
  // header's own py change instantly when `open` flips, ahead of its
  // 300ms padding transition).
  useLayoutEffect(() => {
    if (!open || !headerRef.current) return;
    setHeaderHeight(headerRef.current.getBoundingClientRect().height);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b border-border-soft bg-white transition-[padding] duration-300",
        scrolled ? "py-2.5" : "py-3.5"
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <Logo variant="color" />

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {primaryNav.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                pathname === entry.href ? "text-blue-700" : "text-ink-700 hover:text-blue-700"
              )}
            >
              {entry.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={headerCta.href}
            className="inline-flex items-center gap-1.5 rounded-sm bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-900"
          >
            {headerCta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-ink-900 transition-colors duration-200"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div
          className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white"
          style={{ top: headerHeight || undefined }}
        >
          <div className="flex h-full flex-col justify-between overflow-y-auto px-6 py-8">
            <nav className="flex flex-col" aria-label="Mobile primary">
              {primaryNav.map((entry) => (
                <Link
                  key={entry.href}
                  href={entry.href}
                  className="border-b border-border-soft py-4 text-xl font-semibold text-ink-900"
                >
                  {entry.label}
                </Link>
              ))}
            </nav>
            <div className="mt-10 flex flex-col gap-4">
              <Link
                href={headerCta.href}
                className="inline-flex items-center justify-center gap-1.5 rounded-sm bg-blue-700 px-6 py-4 text-base font-semibold text-white"
              >
                {headerCta.label}
                <span aria-hidden="true">→</span>
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
