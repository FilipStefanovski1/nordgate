"use client";

import { useEffect, useState } from "react";
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border-soft bg-white/90 backdrop-blur-sm py-2.5"
          : "border-transparent bg-white py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  active ? "text-blue-700" : "text-ink-700 hover:text-blue-700"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={headerCta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
          >
            {headerCta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-ink-900"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-[var(--mobile-header-h,60px)] bottom-0 z-40 bg-white">
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
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-4 text-base font-semibold text-white"
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
