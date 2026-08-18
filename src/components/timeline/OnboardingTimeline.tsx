"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { onboardingStages } from "@/data/onboarding";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/components/animations/gsapConfig";
import { cn } from "@/lib/utils/cn";

export function OnboardingTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      if (!containerRef.current || !lineRef.current) return;
      if (prefersReducedMotion()) {
        gsap.set(lineRef.current, { scaleY: 1 });
        return;
      }

      gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top center" });

      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          end: "bottom 65%",
          scrub: 0.6,
        },
      });

      const stages = gsap.utils.toArray<HTMLElement>("[data-stage]");
      stages.forEach((stage, i) => {
        ScrollTrigger.create({
          trigger: stage,
          start: "top 60%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) setActiveIndex(i);
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Connecting rail */}
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border-soft sm:left-[19px]">
        <div ref={lineRef} className="h-full w-full origin-top bg-blue-700" />
      </div>

      <ol className="flex flex-col gap-10 sm:gap-12">
        {onboardingStages.map((stage, i) => (
          <li key={stage.index} data-stage className="relative flex gap-6 pl-0 sm:gap-8">
            <span
              className={cn(
                "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-300 sm:h-10 sm:w-10",
                i <= activeIndex ? "border-blue-700 bg-blue-700 text-white" : "border-border-strong bg-white text-ink-400"
              )}
            >
              {stage.index}
            </span>
            <div className={cn("pt-0.5 transition-opacity duration-300 sm:pt-1", i > activeIndex ? "opacity-50" : "opacity-100")}>
              <h3 className="text-base font-semibold text-ink-900 sm:text-lg">{stage.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500">{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
