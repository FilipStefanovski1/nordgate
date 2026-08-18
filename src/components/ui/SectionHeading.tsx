import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Eyebrow } from "./Eyebrow";

const titleSizes = {
  compact: "text-2xl sm:text-3xl md:text-[2rem] md:leading-[1.12]",
  default: "text-3xl sm:text-4xl md:text-[2.75rem] md:leading-[1.08]",
  large: "text-4xl sm:text-5xl md:text-[3.25rem] md:leading-[1.05]",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  className,
  align = "left",
  size = "default",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  size?: "compact" | "default" | "large";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={tone === "light" ? "white" : "blue"}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 text-balance font-semibold tracking-tight",
          titleSizes[size],
          tone === "light" ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-base sm:text-lg leading-relaxed", tone === "light" ? "text-white/70" : "text-ink-500")}>
          {description}
        </p>
      )}
    </div>
  );
}
