import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo/alternates";
import type { Locale } from "@/i18n/routing";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceGroups } from "@/components/sections/ServiceGroups";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { MarketReadinessSprint } from "@/components/sections/MarketReadinessSprint";
import { FinalCta } from "@/components/sections/FinalCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/nordic-market-entry", locale as Locale),
  };
}

export default async function NordicMarketEntryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <>
      <PageIntro
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        description={t("heroBody")}
      />

      <WhoWeWorkWith />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t("localEyebrow")}
              title={t("localTitle")}
              description={t("localBody")}
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t("phasesEyebrow")}
              title={t("phasesTitle")}
              description={t("phasesBody")}
            />
          </Reveal>
          <Reveal delay className="mt-12">
            <ServiceGroups />
          </Reveal>
        </Container>
      </section>

      <MarketReadinessSprint />
      <FinalCta />
    </>
  );
}
