"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "./gsapConfig";
import { cn } from "@/lib/utils/cn";

type DrawLineProps = {
  className?: string;
  d: string;
  viewBox: string;
  strokeWidth?: number;
  color?: string;
};

/** Draws an SVG path progressively as the viewer scrolls through its container, reversible. */
export function DrawLine({ className, d, viewBox, strokeWidth = 2, color = "var(--blue-500)" }: DrawLineProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!pathRef.current) return;
      const length = pathRef.current.getTotalLength();

      if (prefersReducedMotion()) {
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: 0 });
        return;
      }

      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 85%",
          end: "bottom 30%",
          scrub: 0.6,
        },
      });
    },
    { scope: svgRef }
  );

  return (
    <svg ref={svgRef} viewBox={viewBox} className={cn(className)} fill="none" aria-hidden="true">
      <path ref={pathRef} d={d} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}
