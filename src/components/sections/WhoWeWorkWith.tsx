import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoWeWorkWith() {
  const t = useTranslations("services");
  const readyFor = [t("fit1"), t("fit2"), t("fit3"), t("fit4")];

  return (
    <section className="bg-bg-soft py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              size="compact"
              eyebrow={t("whoEyebrow")}
              title={t("whoTitle")}
              description={t("whoBody")}
            />
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border-soft bg-white p-7">
                <div className="flex items-center gap-2 text-blue-700">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  <p className="text-sm font-semibold">{t("strongFit")}</p>
                </div>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {readyFor.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-dashed border-border-strong p-7">
                <div className="flex items-center gap-2 text-ink-500">
                  <X className="h-4 w-4" aria-hidden="true" />
                  <p className="text-sm font-semibold">{t("notFit")}</p>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-500">
                  {t("notFitBody")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
