import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const frictionPoints = [
  {
    title: "Missing local context",
    description: "How buying decisions actually get made rarely matches the assumptions in a plan written elsewhere.",
  },
  {
    title: "Committing before validating demand",
    description: "Hires and infrastructure get built before there's evidence anyone is buying.",
  },
  {
    title: "Targeting the wrong buyers",
    description: "Outreach reaches the easiest contacts, not the people who can actually say yes.",
  },
  {
    title: "Treating the Nordics as one market",
    description: "Sweden, Denmark, Norway and Finland each have their own commercial culture and decision pace.",
  },
];

export function MarketEntryProblem() {
  return (
    <section className="bg-navy-950 py-24 sm:py-32">
      <Container>
        <Reveal className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <Eyebrow tone="cyan">The market-entry problem</Eyebrow>
            <p className="mt-6 max-w-lg text-balance font-serif text-3xl font-medium leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
              Companies rarely fail to enter the Nordics because they lack ambition.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
              They fail because they lack what only comes from being on the ground: context,
              relationships and an honest read of the market.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-white/10 border-t border-white/10 lg:pt-1">
            {frictionPoints.map((point, i) => (
              <div key={point.title} className="flex gap-6 py-6 sm:gap-10">
                <span className="coord-label pt-1 text-white/35">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-base font-semibold text-white sm:text-lg">{point.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55 sm:text-base">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
