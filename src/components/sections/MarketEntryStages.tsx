import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const stages = [
  {
    index: "01",
    title: "Understand the opportunity",
    description: "Assess the market, the competition and where genuine opportunity exists.",
  },
  {
    index: "02",
    title: "Validate the market",
    description: "Test demand directly with the market before committing to a full entry.",
  },
  {
    index: "03",
    title: "Define the route",
    description: "Set the positioning, target segments and sequencing that make sense for you.",
  },
  {
    index: "04",
    title: "Begin relevant conversations",
    description: "Open dialogue with the accounts and partners worth approaching first.",
  },
  {
    index: "05",
    title: "Learn and refine",
    description: "Use real market feedback to sharpen targeting and the approach as it goes.",
  },
];

export function MarketEntryStages() {
  return (
    <section id="approach" className="scroll-mt-24 bg-bg-soft py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-blue-600">Our approach</p>
              <h2 className="mt-4 max-w-lg text-balance font-serif text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
                A structured path, not a one-off report.
              </h2>
            </div>
            <Button href="/nordic-market-entry" variant="text" className="group shrink-0">
              See the full process
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {stages.map((stage) => (
              <div key={stage.index} className="border-t-2 border-border-strong pt-6">
                <span className="coord-label text-blue-600">{stage.index}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{stage.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{stage.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
