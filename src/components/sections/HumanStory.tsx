import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function HumanStory() {
  const t = useTranslations("home.humanStory");

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
          {/* Photograph — order-first on mobile via natural DOM order, reveals ~80ms after the copy */}
          <Reveal delay>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-soft">
              <Image
                src="/samuelandanders.jpeg"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="coord-label mt-3 text-ink-400">{t("imageAlt")}</p>
          </Reveal>

          {/* Story */}
          <Reveal className="flex flex-col justify-center">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] text-balance font-serif text-3xl font-medium leading-[1.15] tracking-tight text-ink-900 sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-ink-500 sm:text-lg">
              Working across European business ecosystems, we kept seeing capable companies
              struggle to turn international interest into real opportunities. Nordgate was
              created to close that gap.
            </p>
            <p className="mt-8 max-w-[54ch] border-l-2 border-blue-700 pl-5 text-base font-medium leading-relaxed text-ink-900 sm:text-lg">
              {t("quote")}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
