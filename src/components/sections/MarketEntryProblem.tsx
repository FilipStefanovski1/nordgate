import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { editorialImages } from "@/data/editorial-images";

const frictionPoints = [
  "Buying decisions rarely work the way a plan written elsewhere assumes.",
  "Hires and infrastructure get built before anyone has proven demand.",
  "Sweden, Denmark, Norway and Finland each decide at their own pace.",
];

export function MarketEntryProblem() {
  return (
    <section className="bg-navy-950 py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center lg:gap-16">
          <Reveal delay>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
              <Image
                src={editorialImages.eventPanelSkopje.src}
                alt={editorialImages.eventPanelSkopje.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
                style={{ objectPosition: editorialImages.eventPanelSkopje.position }}
              />
            </div>
          </Reveal>

          <Reveal>
            <Eyebrow tone="cyan">Why local understanding matters</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] text-balance font-serif text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl">
              Ambition is rarely the problem.
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/60 sm:text-lg">
              Companies stall in the Nordics because they lack what only comes from being on the
              ground: context, relationships and an honest read of the market.
            </p>

            <ul className="mt-8 flex flex-col divide-y divide-white/10 border-y border-white/10">
              {frictionPoints.map((point, i) => (
                <li key={point} className="flex gap-5 py-4">
                  <span className="coord-label pt-1 text-white/35">{String(i + 1).padStart(2, "0")}</span>
                  <p className="max-w-[46ch] text-sm leading-relaxed text-white/70">{point}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
