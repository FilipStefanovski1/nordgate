import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo/alternates";
import type { Locale } from "@/i18n/routing";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageTextSplit } from "@/components/ui/ImageTextSplit";
import { Reveal } from "@/components/ui/Reveal";
import { CoordinationSteps } from "@/components/sections/CoordinationSteps";
import { PartnerCriteria } from "@/components/sections/PartnerCriteria";
import { FinalCta } from "@/components/sections/FinalCta";
import { editorialImages } from "@/data/editorial-images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.capabilities" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/capabilities", locale as Locale),
  };
}

export default async function CapabilitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("capabilities");

  return (
    <>
      <PageHeader
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        description={t("heroBody")}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={t("whereEyebrow")} title={t("whereTitle")} />
          </Reveal>
          <Reveal delay className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="rounded-2xl border border-border-soft p-7">
                <p className="text-base font-semibold text-ink-900">{t(`cat${n}Title`)}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{t(`cat${n}Body`)}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <ImageTextSplit
        background="soft"
        imageSide="right"
        image={editorialImages.eventPanelSkopje}
        eyebrow={t("notMarketEyebrow")}
        title={t("notMarketTitle")}
        description={t("notMarketBody")}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t("howEyebrow")}
              title={t("howTitle")}
              description={t("howBody")}
            />
          </Reveal>
          <Reveal delay className="mt-12">
            <CoordinationSteps />
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={t("qualityEyebrow")} title={t("qualityTitle")} />
          </Reveal>
          <Reveal delay className="mt-12">
            <PartnerCriteria />
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
