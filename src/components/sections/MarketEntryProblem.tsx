import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function MarketEntryProblem() {
  const t = useTranslations("home.problem");
  const points = [t("pointOne"), t("pointTwo"), t("pointThree")];

  return (
    <section className="bg-navy-950 py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="cyan">{t("eyebrow")}</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] text-balance font-serif text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/60 sm:text-lg">
              {t("body")}
            </p>

            <ul className="mt-8 flex flex-col divide-y divide-white/10 border-y border-white/10">
              {points.map((point, i) => (
                <li key={point} className="flex gap-5 py-4">
                  <span className="coord-label pt-1 text-white/35">{String(i + 1).padStart(2, "0")}</span>
                  <p className="max-w-[46ch] text-sm leading-relaxed text-white/70">{point}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
