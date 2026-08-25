import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo/alternates";
import type { Locale } from "@/i18n/routing";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { ImageTextSplit } from "@/components/ui/ImageTextSplit";
import { Reveal } from "@/components/ui/Reveal";
import { LocationsGrid } from "@/components/sections/LocationsGrid";
import { PrinciplesGrid } from "@/components/sections/PrinciplesGrid";
import { TeamSection } from "@/components/sections/TeamSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { editorialImages } from "@/data/editorial-images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/about", locale as Locale),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <PageIntro
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        description={t("heroBody")}
      />

      <ImageTextSplit
        imageSide="left"
        image={editorialImages.founders}
        eyebrow={t("whyEyebrow")}
        title={t("whyTitle")}
        description={t("whyBody")}
      />

      <TeamSection background="soft" />

      <EditorialImage
        src={editorialImages.eventAuditorium.src}
        alt={editorialImages.eventAuditorium.alt}
        position={editorialImages.eventAuditorium.position}
      />

      <section className="bg-navy-950 py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow={t("whereEyebrow")}
              title={t("whereTitle")}
              description={t("whereBody")}
            />
          </Reveal>
          <Reveal delay className="mt-12">
            <LocationsGrid />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={t("principlesEyebrow")} title={t("principlesTitle")} />
          </Reveal>
          <Reveal delay className="mt-12">
            <PrinciplesGrid />
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
