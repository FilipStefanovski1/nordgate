import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StaggerReveal } from "@/components/animations/StaggerReveal";

const stages = [
  {
    index: "01",
    title: "Assess",
    description: "Understand the opportunity, the market, the competition, positioning and target audience.",
  },
  {
    index: "02",
    title: "Enter",
    description: "Identify accounts and decision-makers, and execute commercial outreach on your behalf.",
  },
  {
    index: "03",
    title: "Build",
    description: "Turn conversations into opportunities, using market feedback to develop the commercial presence.",
  },
];

export function MarketEntryStages() {
  return (
    <section className="bg-bg-soft py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-blue-600">How market entry works</p>
            <h2 className="mt-4 max-w-lg text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Strategy and execution, run by the same team.
            </h2>
          </div>
          <Button href="/nordic-market-entry" variant="ghost" className="group shrink-0">
            See the full process
          </Button>
        </div>

        <StaggerReveal className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {stages.map((stage) => (
            <div key={stage.index} className="border-t-2 border-border-strong pt-6">
              <span className="coord-label text-blue-600">{stage.index}</span>
              <h3 className="mt-4 text-xl font-semibold text-ink-900">{stage.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{stage.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
