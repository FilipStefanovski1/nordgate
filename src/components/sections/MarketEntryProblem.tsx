import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const frictionPoints = [
  {
    title: "Local market context",
    description: "Understanding how buying decisions actually get made in each Nordic market.",
  },
  {
    title: "Demand visibility",
    description: "A clear, evidence-based view of where real interest exists before committing resources.",
  },
  {
    title: "Buyer relationships",
    description: "Access to the people who can actually say yes, not just a list of company names.",
  },
  {
    title: "Business-culture fluency",
    description: "Knowing how Nordic companies communicate, decide and build trust over time.",
  },
  {
    title: "A realistic route to market",
    description: "A sequence of steps that leads somewhere, rather than a strategy document on a shelf.",
  },
];

export function MarketEntryProblem() {
  return (
    <section className="bg-navy-950 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
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
        </div>
      </Container>
    </section>
  );
}
