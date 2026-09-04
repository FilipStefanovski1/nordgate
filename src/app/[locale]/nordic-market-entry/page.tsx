import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo/alternates";
import type { Locale } from "@/i18n/routing";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageTextSplit } from "@/components/ui/ImageTextSplit";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import { ServiceGroups } from "@/components/sections/ServiceGroups";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { MarketReadinessSprint } from "@/components/sections/MarketReadinessSprint";
import { FinalCta } from "@/components/sections/FinalCta";
import { editorialImages } from "@/data/editorial-images";

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

      <ImageTextSplit
        imageSide="left"
        image={editorialImages.northernLights}
        eyebrow={t("localEyebrow")}
        title={t("localTitle")}
        description={t("localBody")}
      />

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

      <section className="border-t border-border-soft bg-white py-10">
        <Container>
          <p className="text-center text-sm text-ink-500">
            {t.rich("crossLinkBody", {
              link: (chunks) => (
                <Link href="/capabilities" className="link-underline font-semibold text-blue-700 hover:text-navy-900">
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
