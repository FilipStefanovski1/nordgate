import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { headerCta } from "@/data/navigation";

export function FinalCta() {
  const t = useTranslations("home.cta");
  const tNav = useTranslations("nav");

  return (
    <section className="bg-[var(--nordgate-navy)] py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <Eyebrow tone="cyan">{t("eyebrow")}</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-md text-balance font-serif text-3xl font-medium leading-[1.2] tracking-tight text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/65">
            {t("body")}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={headerCta.href} variant="inverse" fullWidthOnMobile>
              {tNav("bookMeeting")}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
