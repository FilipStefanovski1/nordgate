"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav, headerCta, headerSecondaryCta, type NavEntry } from "@/data/navigation";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

function DesktopDropdown({
  entry,
  transparent,
  isOpen,
  onToggle,
  onClose,
  active,
}: {
  entry: Extract<NavEntry, { type: "dropdown" }>;
  transparent: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-wide transition-colors duration-200",
          transparent
            ? active
              ? "text-white"
              : "text-white/75 hover:text-white"
            : active
              ? "text-blue-700"
              : "text-ink-700 hover:text-blue-700"
        )}
      >
        {entry.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-10 mt-3 w-64 -translate-x-1/2 rounded-lg border border-border-soft bg-white p-2 shadow-lg shadow-navy-950/5"
        >
          {entry.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={onClose}
              className="block rounded-md px-3 py-2.5 transition-colors duration-150 hover:bg-bg-soft"
            >
              <span className="block text-sm font-medium normal-case text-ink-900">{item.label}</span>
              {item.description && <span className="mt-0.5 block text-xs normal-case text-ink-500">{item.description}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 20);
    return () => window.clearTimeout(id);
  }, []);

  // Close menus when the route changes — derived during render (rather than
  // in an effect) so it can't cascade an extra render.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setOpen(false);
    setOpenDropdown(null);
    setExpandedMobile(null);
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

  const isEntryActive = (entry: NavEntry): boolean =>
    entry.type === "link" ? pathname === entry.href : entry.items.some((item) => pathname === item.href.split("#")[0]);

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
      <Container className="flex items-center justify-between gap-6">
        <Logo variant={transparent ? "white" : "color"} />

        <nav className="hidden xl:flex items-center gap-8" aria-label="Primary">
          {primaryNav.map((entry) =>
            entry.type === "link" ? (
              <Link
                key={entry.href}
                href={entry.href}
                className={cn(
                  "text-[13px] font-medium uppercase tracking-wide transition-colors duration-200",
                  transparent
                    ? pathname === entry.href
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : pathname === entry.href
                      ? "text-blue-700"
                      : "text-ink-700 hover:text-blue-700"
                )}
              >
                {entry.label}
              </Link>
            ) : (
              <DesktopDropdown
                key={entry.label}
                entry={entry}
                transparent={transparent}
                isOpen={openDropdown === entry.label}
                onToggle={() => setOpenDropdown((v) => (v === entry.label ? null : entry.label))}
                onClose={() => setOpenDropdown(null)}
                active={isEntryActive(entry)}
              />
            )
          )}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <Link
            href={headerSecondaryCta.href}
            className={cn(
              "text-[13px] font-medium uppercase tracking-wide transition-colors duration-200",
              transparent ? "text-white/75 hover:text-white" : "text-ink-700 hover:text-blue-700"
            )}
          >
            {headerSecondaryCta.label}
          </Link>
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
          <div className="flex h-full flex-col justify-between overflow-y-auto px-6 py-8">
            <nav className="flex flex-col" aria-label="Mobile primary">
              {primaryNav.map((entry) =>
                entry.type === "link" ? (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    className="border-b border-border-soft py-4 text-xl font-semibold text-ink-900"
                  >
                    {entry.label}
                  </Link>
                ) : (
                  <div key={entry.label} className="border-b border-border-soft">
                    <button
                      type="button"
                      onClick={() => setExpandedMobile((v) => (v === entry.label ? null : entry.label))}
                      aria-expanded={expandedMobile === entry.label}
                      className="flex w-full items-center justify-between py-4 text-xl font-semibold text-ink-900"
                    >
                      {entry.label}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-ink-400 transition-transform duration-200",
                          expandedMobile === entry.label && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {expandedMobile === entry.label && (
                      <div className="flex flex-col gap-1 pb-4 pl-1">
                        {entry.items.map((item) => (
                          <Link key={item.href} href={item.href} className="rounded-md px-3 py-2.5 text-base text-ink-700 hover:bg-bg-soft">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </nav>
            <div className="mt-10 flex flex-col gap-4">
              <Link
                href={headerSecondaryCta.href}
                className="inline-flex items-center justify-center rounded-md border border-border-strong px-6 py-4 text-base font-semibold text-ink-900"
              >
                {headerSecondaryCta.label}
              </Link>
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
