"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/components/animations/gsapConfig";
import { cn } from "@/lib/utils/cn";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 20);
    return () => window.clearTimeout(id);
  }, []);

  // Scroll-linked exit: content only lifts/fades once the hero is already
  // leaving the viewport, and reverses smoothly on the way back up.
  useGSAP(
    () => {
      if (!sectionRef.current || !contentRef.current || !bgRef.current) return;
      if (prefersReducedMotion()) return;

      gsap.to(contentRef.current, {
        y: -36,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(bgRef.current, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[max(780px,100svh)] w-full overflow-hidden bg-navy-950"
    >
      {/* Background artwork */}
      <div
        ref={bgRef}
        className={cn(
          "absolute inset-0 transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
          mounted ? "scale-100" : "scale-[1.03]"
        )}
      >
        <Image
          src="/brand/nordgate-map-wide.png"
          alt="Map of the Nordic region and Northern Europe, highlighting Norway, Sweden, Finland and Denmark"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[62%_center] lg:object-center"
        />
      </div>

      {/* Overlays — uniform tint, left-side gradient for copy legibility, bottom fade into the trust strip */}
      <div className="absolute inset-0 bg-navy-950/55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/35 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 flex w-full flex-1 items-center">
        <div className="w-full pl-6 pr-6 pt-20 sm:pl-10 sm:pr-10 lg:pl-[9vw] lg:pr-10 lg:pt-0">
          <div className="max-w-[1200px]">
            <span
              className={cn(
                "eyebrow inline-block text-cyan-300 transition-[opacity,transform] duration-700 motion-reduce:transition-none",
                mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
            >
              Nordic market entry · Sales execution
            </span>

            <h1
              className={cn(
                "mt-6 text-balance text-[2.15rem] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.5rem] lg:leading-[1.02]",
                "transition-[opacity,transform] duration-700 motion-reduce:transition-none",
                mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
              style={{ transitionDelay: mounted ? "120ms" : "0ms" }}
            >
              <span className="block whitespace-normal sm:whitespace-nowrap text-white">Enter the Nordics.</span>
              <span className="block whitespace-normal sm:whitespace-nowrap text-cyan-300">We do the selling.</span>
            </h1>

            <p
              className={cn(
                "mt-7 max-w-[620px] text-balance text-base leading-relaxed text-white/80 sm:text-lg",
                "transition-[opacity,transform] duration-700 motion-reduce:transition-none",
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: mounted ? "260ms" : "0ms" }}
            >
              NordGate helps established international companies enter and grow across the
              Nordics through local market knowledge and hands-on sales execution. We act as an
              extension of your commercial team, from targeting to qualified meetings.
            </p>

            <div
              className={cn(
                "mt-10 flex flex-col gap-4 sm:flex-row sm:items-center",
                "transition-[opacity,transform] duration-700 motion-reduce:transition-none",
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: mounted ? "380ms" : "0ms" }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-8 py-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-blue-600"
              >
                Explore your Nordic potential
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/50 px-8 py-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
              >
                See how we work
              </Link>
            </div>

            <p
              className={cn(
                "coord-label mt-10 text-white/50",
                "transition-[opacity,transform] duration-700 motion-reduce:transition-none",
                mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
              style={{ transitionDelay: mounted ? "480ms" : "0ms" }}
            >
              Copenhagen · Stockholm · Skopje
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
