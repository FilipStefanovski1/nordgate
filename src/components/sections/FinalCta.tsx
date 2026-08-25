import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { headerCta } from "@/data/navigation";

// One real, existing project image. Swap this path if a better asset
// becomes available — keep the alt text matching whatever is actually shown.
const preFooterImage = {
  src: "/images/pre-footer/nordgate-laptop-mockup.png",
  alt: "A laptop displaying a photograph from a Nordgate-connected business event",
  position: "center",
};

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--nordgate-navy)] py-16 sm:py-24 lg:py-28">
      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow tone="cyan">Start a conversation</Eyebrow>
          <h2 className="mt-5 max-w-md text-balance font-serif text-3xl font-medium leading-[1.2] tracking-tight text-white sm:text-4xl">
            Ready to test the Nordic opportunity?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
            Tell us where you want to grow. We&apos;ll help assess the opportunity, identify the
            right market and define how Nordgate can execute the commercial work.
          </p>
          <Link
            href={headerCta.href}
            className="btn-nordgate-inverse mt-8 inline-flex h-[50px] items-center rounded px-6 text-[15px] font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--nordgate-blue-soft)]"
          >
            Book a meeting
          </Link>
        </Reveal>

        <Reveal delay>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={preFooterImage.src}
              alt={preFooterImage.alt}
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
