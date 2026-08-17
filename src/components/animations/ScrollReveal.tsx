"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "./gsapConfig";
import { cn } from "@/lib/utils/cn";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "span";
  y?: number;
  scale?: number;
  delay?: number;
  scrub?: boolean;
  start?: string;
  end?: string;
};

/**
 * Fades and lifts content into view as it enters the viewport, and reverses
 * as the user scrolls back up — scrubbed to actual scroll progress rather
 * than a one-shot enter animation.
 */
export function ScrollReveal({
  children,
  className,
  as = "div",
  y = 44,
  scale = 1,
  delay = 0,
  scrub = true,
  start = "top 85%",
  end = "top 45%",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (prefersReducedMotion()) {
        gsap.set(ref.current, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.fromTo(
        ref.current,
        { opacity: 0, y, scale: scale === 1 ? 1 : 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          delay,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start,
            end,
            scrub: scrub ? 0.6 : false,
          },
        }
      );
    },
    { scope: ref }
  );

  const Comp = as;
  return (
    <Comp ref={ref as never} className={cn(className)}>
      {children}
    </Comp>
  );
}
