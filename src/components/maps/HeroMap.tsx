"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

const markers = [
  { city: "Stockholm", top: "31%", left: "63%", delay: 500 },
  { city: "Copenhagen", top: "48%", left: "56%", delay: 750 },
];

/**
 * Above-the-fold, so this reveals on mount via CSS transitions rather than a
 * GSAP/rAF tween — rAF-driven animation can stall in throttled/background
 * tabs, which would otherwise leave the hero image invisible.
 */
export function HeroMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 20);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/11] lg:aspect-[6/5]",
        "transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
        mounted ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[1.04] translate-y-5"
      )}
    >
      <Image
        src="/brand/nordgate-map-square.png"
        alt="Map of the Nordic region and Northern Europe, highlighted to show NordGate's area of operation"
        fill
        priority
        sizes="(min-width: 1024px) 46vw, 90vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 via-transparent to-transparent" />

      {markers.map((m) => (
        <div key={m.city} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: m.top, left: m.left }}>
          <span
            className={cn(
              "block h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(0,174,239,0.25)]",
              "transition-[opacity,transform] duration-500 motion-reduce:transition-none",
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )}
            style={{ transitionDelay: `${m.delay}ms` }}
          />
          <span
            className={cn(
              "coord-label absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-white/85",
              "transition-opacity duration-500 motion-reduce:transition-none",
              mounted ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: `${m.delay + 100}ms` }}
          >
            {m.city}
          </span>
        </div>
      ))}
    </div>
  );
}
