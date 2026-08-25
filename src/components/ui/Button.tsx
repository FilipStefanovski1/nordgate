import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  /**
   * primary: flat navy fill, off-white text — the standard Nordgate CTA.
   * inverse: off-white fill, navy text — for use on dark/photo backgrounds.
   * secondary: outlined, transparent fill — lower-emphasis actions.
   * text: underlined link, no fill — lowest-emphasis actions.
   */
  variant?: "primary" | "inverse" | "secondary" | "text";
  className?: string;
  icon?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "btn-nordgate focus-visible:outline-[var(--nordgate-blue)] active:opacity-90",
  inverse: "btn-nordgate-inverse focus-visible:outline-[var(--nordgate-blue)] active:opacity-90",
  secondary:
    "bg-transparent text-ink-900 border border-border-strong hover:border-blue-700 hover:text-blue-700 active:opacity-80",
  text: "link-underline bg-transparent text-blue-700 hover:text-navy-900 px-0",
};

export function Button({ href, children, variant = "primary", className, icon = true }: ButtonProps) {
  const base =
    variant === "text"
      ? "group inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
      : "group inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-semibold transition-colors duration-200";

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {icon && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
