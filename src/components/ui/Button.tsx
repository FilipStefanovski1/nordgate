import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  /**
   * primary   — flat brand-blue fill, off-white text. Standard CTA on light pages.
   * inverse   — off-white fill, brand-blue text. For dark or photographic
   *             backgrounds, and for the brand-blue hero canvas.
   * secondary — transparent with a 1px border, for lower-emphasis actions.
   * text      — no container; an underline-grow link for the lowest emphasis.
   */
  variant?: "primary" | "inverse" | "secondary" | "text";
  /** Navigation-scale height (42px) instead of the standard 50px. */
  compact?: boolean;
  /** Full width on mobile, natural width from `sm` up. */
  fullWidthOnMobile?: boolean;
  /** Optional click handler (e.g. closing the mobile menu on navigate). */
  onClick?: () => void;
  className?: string;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "btn-nordgate focus-visible:outline-[var(--nordgate-blue)]",
  inverse: "btn-nordgate-inverse focus-visible:outline-[var(--nordgate-blue)]",
  secondary:
    "bg-transparent text-ink-900 border border-border-strong transition-colors duration-200 hover:border-[var(--nordgate-brand-blue)] hover:bg-[var(--nordgate-off-white)]",
  text: "link-underline bg-transparent font-semibold text-blue-700 transition-colors duration-200 hover:text-navy-900",
};

export function Button({
  href,
  children,
  variant = "primary",
  compact = false,
  fullWidthOnMobile = false,
  onClick,
  className,
}: ButtonProps) {
  const base =
    variant === "text"
      ? "inline-flex items-center text-sm"
      : cn(
          "inline-flex items-center justify-center rounded font-semibold",
          compact ? "h-[42px] px-5 text-sm" : "h-[50px] px-6 text-[15px]",
          fullWidthOnMobile && "w-full sm:w-auto"
        );

  // An absolute URL (the Google Calendar booking page) leaves the site, so it
  // gets a plain anchor with the new-tab/opener protections rather than
  // next/link's client-side routing.
  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn(base, variants[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
