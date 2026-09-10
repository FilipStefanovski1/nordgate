import { useFormatter, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { companyDetails, type LegalDocument } from "@/data/legal";

/**
 * Long-form renderer shared by the privacy and terms routes, so both keep
 * identical measure, rhythm and heading scale.
 */
export function LegalContent({ document }: { document: LegalDocument }) {
  const t = useTranslations("legal");
  const format = useFormatter();

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-[68ch]">
          <div className="flex flex-col gap-2 border-b border-border-soft pb-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <p className="text-sm text-ink-400">
              {t("lastUpdated", {
                date: format.dateTime(new Date(document.lastUpdated), {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
              })}
            </p>
            <p className="text-sm text-ink-400">{t("languageNotice")}</p>
          </div>

          <p className="mt-10 text-lg leading-relaxed text-ink-700">{document.intro}</p>

          <div className="mt-12 flex flex-col gap-10">
            {document.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-xl font-medium tracking-tight text-ink-900 sm:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base leading-relaxed text-ink-500">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 flex flex-col gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-base leading-relaxed text-ink-500">
                        <span
                          className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-blue-600"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="rounded-2xl border border-border-soft p-8">
              <h2 className="font-serif text-xl font-medium tracking-tight text-ink-900">
                {t("companyDetails")}
              </h2>
              <address className="mt-4 flex flex-col gap-3 text-base not-italic leading-relaxed text-ink-500">
                <span>
                  {companyDetails.legalName}
                  <br />
                  {companyDetails.street}
                  <br />
                  {companyDetails.postal}
                  <br />
                  {companyDetails.country}
                </span>
                <span className="flex flex-col gap-1">
                  <a
                    href={`mailto:${companyDetails.email}`}
                    className="link-underline w-fit font-semibold text-blue-700 transition-colors hover:text-navy-900"
                  >
                    {companyDetails.email}
                  </a>
                  <a
                    href={`tel:${companyDetails.phoneHref}`}
                    className="link-underline w-fit font-semibold text-blue-700 transition-colors hover:text-navy-900"
                  >
                    {companyDetails.phone}
                  </a>
                </span>
                <span className="text-ink-400">CVR: {companyDetails.cvr}</span>
              </address>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
