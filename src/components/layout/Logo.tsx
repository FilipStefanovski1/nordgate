import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Logo({ variant = "color" }: { variant?: "color" | "white" }) {
  return (
    <Link
      href="/"
      aria-label="NordGate — home"
      className={cn(
        "font-serif text-2xl font-bold uppercase tracking-tight sm:text-[1.75rem]",
        variant === "white" ? "text-white" : "text-blue-600"
      )}
    >
      Nordgate
    </Link>
  );
}
