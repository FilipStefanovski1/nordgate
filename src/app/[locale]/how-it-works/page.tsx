import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo/alternates";
import type { Locale } from "@/i18n/routing";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OutreachCycle } from "@/components/sections/OutreachCycle";
import { ResponsibilitySplit } from "@/components/sections/ResponsibilitySplit";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { editorialImages } from "@/data/editorial-images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.approach" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/how-it-works", locale as Locale),
  };
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("approach");

  return (
    <>
      <PageIntro
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        description={t("heroBody")}
      />

      <ProcessSection background="white" />

      <EditorialImage
        background="soft"
        src={editorialImages.teamCollaboration.src}
        alt={editorialImages.teamCollaboration.alt}
        position={editorialImages.teamCollaboration.position}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t("outreachEyebrow")}
              title={t("outreachTitle")}
              description={t("outreachBody")}
            />
          </Reveal>
          <Reveal delay className="mt-12">
            <OutreachCycle />
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={t("splitEyebrow")} title={t("splitTitle")} />
          </Reveal>
          <Reveal delay className="mt-12">
            <ResponsibilitySplit />
          </Reveal>
        </Container>
      </section>

      <CalculatorSection />
      <FinalCta />
    </>
  );
}
