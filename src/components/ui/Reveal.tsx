"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/motion/useReveal";
import { cn } from "@/lib/utils/cn";

export function Reveal({
  children,
  delay = false,
  className,
}: {
  children: ReactNode;
  /** Offset this element ~80ms behind a sibling Reveal (e.g. a photograph after its copy). */
  delay?: boolean;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", delay && "reveal-delay", visible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
