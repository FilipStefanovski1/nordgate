import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo/alternates";
import type { Locale } from "@/i18n/routing";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { locations } from "@/data/locations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/contact", locale as Locale),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageHeader
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        description={t("heroBody")}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <ContactForm />

            <div>
              <p className="eyebrow text-ink-400">{t("whereWeWork")}</p>
              <div className="mt-6 flex flex-col gap-6">
                {locations.map((loc) => (
                  <div key={loc.city} className="border-b border-border-soft pb-6 last:border-0">
                    <p className="text-lg font-semibold text-ink-900">{loc.city}</p>
                    <p className="mt-1 text-sm text-ink-500">{loc.country}</p>
                    <p className="coord-label mt-2 text-ink-400">
                      {loc.lat.toFixed(2)}°N {loc.lon.toFixed(2)}°E
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
