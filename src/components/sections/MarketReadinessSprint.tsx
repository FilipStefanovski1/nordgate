import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function MarketReadinessSprint() {
  const t = useTranslations("services");
  const scope = [t("sprint1"), t("sprint2"), t("sprint3"), t("sprint4")];

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow text-blue-600">{t("sprintEyebrow")}</p>
            <h2 className="mt-4 max-w-sm text-balance font-serif text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              {t("sprintTitle")}
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-500">
              {t("sprintBody")}
            </p>
            <Button href="/contact" className="mt-7">
              {t("sprintCta")}
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-x-10 border-t border-border-soft sm:grid-cols-2">
            {scope.map((item, i) => (
              <div key={item} className="flex gap-4 border-b border-border-soft py-5">
                <span className="coord-label pt-0.5 text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base font-medium text-ink-900">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
