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
        gsap.set(lineRef.current, { scaleX: 1 });
        return;
      }

      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

      gsap.to(lineRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 0.6,
        },
      });

      const stages = gsap.utils.toArray<HTMLElement>("[data-stage]");
      stages.forEach((stage, i) => {
        ScrollTrigger.create({
          trigger: stage,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setActiveIndex(i);
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      {/* Desktop progress rail */}
      <div className="relative mb-14 hidden h-[2px] w-full bg-border-soft lg:block">
        <div ref={lineRef} className="absolute inset-0 bg-blue-700" />
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-6 lg:gap-6">
        {onboardingStages.map((stage, i) => (
          <div
            key={stage.index}
            data-stage
            className={cn(
              "relative border-l-2 pl-5 lg:border-l-0 lg:pl-0 lg:text-left transition-opacity duration-300",
              i > activeIndex ? "lg:opacity-40" : "opacity-100",
              i <= activeIndex ? "border-blue-700" : "border-border-soft"
            )}
          >
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300",
                  i <= activeIndex ? "bg-blue-700 text-white" : "bg-border-soft text-ink-400"
                )}
              >
                {stage.index}
              </span>
            </div>
            <p className="coord-label mt-4 text-ink-400 lg:hidden">{stage.index}</p>
            <h3 className="mt-3 text-base font-semibold text-ink-900 sm:text-lg">{stage.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{stage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
