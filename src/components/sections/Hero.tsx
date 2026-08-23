import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative flex min-h-[max(748px,100svh)] w-full flex-col overflow-hidden bg-navy-950 pt-[68px]">
      {/*
        Hero photograph — PENDING.
        Needed: a wide, cinematic, real photograph connected to Nordgate —
        a Nordic city/landscape, a Nordic business environment, founder
        activity in Sweden/Northern Europe, or a real cross-border
        conference/event. No stock businesspeople, handshakes or maps.
        Drop the file in /public and swap this placeholder div for an
        <Image fill> using it.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-[84px] max-w-[160px] text-right sm:right-10"
      >
        <p className="text-[11px] leading-relaxed text-white/20">
          Hero photograph pending — see implementation notes.
        </p>
      </div>

      {/* Small localized gradient for lower text legibility only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-950/70 to-transparent"
      />

      {/* Vertical edge detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] text-[11px] tracking-[0.2em] text-white/35 lg:right-10 lg:block"
      >
        01 / NORDICS
      </div>

      <Container className="relative flex flex-1 flex-col py-14 sm:py-16">
        <div className="flex flex-1 flex-col justify-center">
          <p className="coord-label text-cyan-300">Nordic market entry</p>

          <h1 className="mt-5 max-w-[14ch] text-balance text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-[5.25rem]">
            <span className="text-white">Your route into</span>
            <br />
            <span className="text-cyan-300">the Nordics.</span>
          </h1>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3.5 text-[15px] font-semibold text-navy-950 transition-colors duration-200 hover:bg-cyan-300"
            >
              Book a market assessment
            </Link>
          </div>

          <Link
            href="/how-it-works"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
          >
            See how we work <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className="mt-10 max-w-[280px] self-start text-sm leading-relaxed text-white/60 lg:self-end lg:text-right">
          Market validation, local understanding and business development for international B2B
          companies entering Northern Europe.
        </p>
      </Container>
    </section>
  );
}
