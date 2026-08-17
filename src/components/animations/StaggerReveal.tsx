"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "./gsapConfig";
import { cn } from "@/lib/utils/cn";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  itemSelector?: string;
  stagger?: number;
  y?: number;
};

/** Staggers direct children (or a matched selector) into view, scrubbed with scroll. */
export function StaggerReveal({
  children,
  className,
  itemSelector = ":scope > *",
  stagger = 0.08,
  y = 32,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll(itemSelector);
      if (!items.length) return;

      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          stagger,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
