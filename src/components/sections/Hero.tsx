import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative flex min-h-[max(620px,calc(100svh-96px))] w-full flex-col overflow-hidden bg-navy-950 pt-[68px]">
      <div className="absolute inset-0">
        <Image
          src="/event1.jpeg"
          alt={t("imageAlt")}
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
        {t("edgeLabel")}
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
            {t("titleLead")}
            <br />
            <span className="hero-emphasis">
              {t("titleEmphasis")}
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
            <Button href="/contact" variant="inverse" fullWidthOnMobile>
              {t("cta")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
