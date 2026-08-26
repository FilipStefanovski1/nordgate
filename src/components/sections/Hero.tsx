import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Two deliberate areas: a solid cobalt canvas carrying the whole message,
 * then a full-bleed photograph flush beneath it. The canvas height leaves
 * the top of the photograph visible on a typical desktop viewport, so the
 * page invites a scroll rather than ending at a fold.
 */
export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <>
      <section className="hero-canvas flex items-center">
        <Container className="flex flex-col items-center text-center">

          <h1
            className="hero-enter hero-enter-title max-w-[16ch] text-balance font-serif font-medium text-[var(--nordgate-off-white)]"
            style={{
              fontSize: "clamp(3rem, 8vw, 8.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            {t("titleLead")}{" "}
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
            .
          </h1>

          <p className="hero-enter hero-enter-cta mt-8 max-w-[58ch] text-base leading-relaxed text-[var(--nordgate-blue-pale)] sm:text-lg">
            {t("supporting")}
          </p>

          <div className="hero-enter hero-enter-cta mt-9">
            <Button href="/contact">{t("cta")}</Button>
          </div>
        </Container>
      </section>

      {/* Full-bleed event photograph — no overlay, no text, flush to the canvas. */}
      <div className="hero-photo">
        <Image
          src="/event1.jpeg"
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          // Keeps the speaker and seated audience in frame; the wide crop would
          // otherwise land on the ceiling. Mobile sits slightly tighter.
          className="object-cover object-[54%_72%] sm:object-[60%_66%]"
        />
      </div>
    </>
  );
}
