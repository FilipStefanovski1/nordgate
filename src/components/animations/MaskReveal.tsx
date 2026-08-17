"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "./gsapConfig";
import { cn } from "@/lib/utils/cn";

type MaskRevealProps = {
  children: ReactNode;
  className?: string;
};

/** Reveals content through a clipping mask that opens on scroll-in, closes on scroll-out. */
export function MaskReveal({ children, className }: MaskRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapRef.current || !innerRef.current) return;

      if (prefersReducedMotion()) {
        gsap.set(wrapRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(innerRef.current, { scale: 1 });
        return;
      }

      gsap.set(wrapRef.current, { clipPath: "inset(0% 0% 100% 0%)" });
      gsap.set(innerRef.current, { scale: 1.12 });

      gsap.to(wrapRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 85%",
          end: "top 35%",
          scrub: 0.6,
        },
      });

      gsap.to(innerRef.current, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: 0.6,
        },
      });
    },
    { scope: wrapRef }
  );

  return (
    <div ref={wrapRef} className={cn("overflow-hidden", className)}>
      <div ref={innerRef} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}
