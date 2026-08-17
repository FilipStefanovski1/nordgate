import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  className?: string;
  icon?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-blue-700 text-white hover:bg-navy-900 focus-visible:outline-white",
  secondary:
    "bg-transparent text-ink-900 border border-border-strong hover:border-blue-700 hover:text-blue-700",
  ghost: "bg-transparent text-blue-700 hover:text-navy-900 px-0",
  onDark: "bg-white text-navy-950 hover:bg-cyan-300",
};

export function Button({ href, children, variant = "primary", className, icon = true }: ButtonProps) {
  const base =
    variant === "ghost"
      ? "inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
      : "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {icon && <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />}
    </Link>
  );
}
