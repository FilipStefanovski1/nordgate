import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative flex min-h-[max(620px,calc(100svh-96px))] w-full flex-col overflow-hidden bg-navy-950 pt-[68px]">
      <div className="absolute inset-0">
        <Image
          src="/event1.jpeg"
          alt="Attendees at a cross-border business event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_38%] [filter:saturate(0.9)_contrast(1.02)]"
        />
      </div>

      {/* Readability gradient — darkest behind the copy, fading toward the
          photograph's brighter right side. Stronger, top-heavy on mobile
          since the content spans the full width there. */}
      <div aria-hidden="true" className="hero-overlay pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="hero-overlay-bottom pointer-events-none absolute inset-0" />
      {/* Noise — full-surface density, kept subtle via low opacity. Sits above
          the gradients and below the content. */}
      <div aria-hidden="true" className="hero-noise" />

      {/* Vertical edge detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] text-[11px] tracking-[0.2em] text-white/35 lg:right-10 lg:block"
      >
        01 / NORDICS
      </div>

      <Container className="relative flex flex-1 flex-col py-14 sm:py-16">
        <div className="flex max-w-[900px] flex-1 flex-col justify-center">
          <h1
            className="hero-enter text-balance font-bold text-[var(--nordgate-off-white)]"
            style={{
              fontSize: "clamp(3rem, 6.2vw, 6rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
            }}
          >
            Your route into
            <br />
            <span className="hero-emphasis">
              the Nordics.
              <svg
                aria-hidden="true"
                className="hero-underline"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path pathLength={1} d="M2,7 C38,2.5 74,8.5 112,4.5 C144,1.5 176,6.5 198,3.5" />
              </svg>
            </span>
          </h1>

          <div className="hero-enter hero-enter-cta mt-10">
            <Link
              href="/contact"
              className="btn-nordgate-inverse inline-flex h-[52px] items-center rounded px-6 text-[16px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: "var(--nordgate-blue-soft)" }}
            >
              Book a market assessment
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
