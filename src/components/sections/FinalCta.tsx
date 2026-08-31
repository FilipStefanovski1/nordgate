import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { headerCta } from "@/data/navigation";

const preFooterImage = {
  src: "/images/pre-footer/nordgate-laptop-mockup.png",
  alt: "A laptop displaying a photograph from a Nordgate-connected business event",
  position: "center",
};

export function FinalCta() {
  const t = useTranslations("home.cta");
  const tNav = useTranslations("nav");

  return (
    <section className="relative overflow-hidden bg-[var(--nordgate-navy)] py-16 sm:py-24 lg:py-28">
      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow tone="cyan">{t("eyebrow")}</Eyebrow>
          <h2 className="mt-5 max-w-md text-balance font-serif text-3xl font-medium leading-[1.2] tracking-tight text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
            {t("body")}
          </p>
          <Button href={headerCta.href} variant="inverse" className="mt-8" fullWidthOnMobile>
            {tNav("bookMeeting")}
          </Button>
        </Reveal>

        <Reveal delay>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={preFooterImage.src}
              alt={t("imageAlt")}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              style={{ objectPosition: preFooterImage.position }}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
