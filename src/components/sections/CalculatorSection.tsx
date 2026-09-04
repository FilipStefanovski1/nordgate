import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoiCalculator } from "@/components/calculator/RoiCalculator";

export function CalculatorSection() {
  const t = useTranslations("roiCalculator");

  return (
    <section id="calculator" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container>
        <div>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </div>

        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
            {t("scopeLabel")}
          </p>
          <div className="mt-4">
            <RoiCalculator />
          </div>
        </div>
      </Container>
    </section>
  );
}
