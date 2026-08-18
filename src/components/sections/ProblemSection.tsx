import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerReveal } from "@/components/animations/StaggerReveal";

const painPoints = [
  { title: "No local sales presence", description: "You know the product works. You don't yet have anyone on the ground selling it." },
  { title: "Limited access to decision-makers", description: "Cold outreach from abroad rarely reaches the people who actually decide." },
  { title: "Unclear market priority", description: "Four different countries, four different playbooks, no way to know where to start." },
  { title: "Expensive local hiring", description: "A local sales hire is a slow, costly bet before you know the market responds." },
  { title: "Slow market validation", description: "Without local execution, it takes quarters, not weeks, to learn what works." },
  { title: "Generic outreach doesn't build trust", description: "Nordic buyers respond to relevance and credibility, not volume." },
];

export function ProblemSection() {
  return (
    <section className="bg-bg-soft py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <ScrollReveal>
            <SectionHeading
              eyebrow="The challenge"
              title="The Nordics are attractive. Entering them isn't simple."
              description="Sweden, Denmark, Norway and Finland combine strong purchasing power, sophisticated companies and advanced digitalisation with stable institutions. Entering them means navigating different business cultures, languages, regulations and decision-making structures, market by market."
              className="lg:sticky lg:top-28"
            />
          </ScrollReveal>

          <StaggerReveal className="flex flex-col">
            {painPoints.map((point, i) => (
              <div key={point.title} className="flex gap-6 border-t border-border-strong/60 py-6">
                <span className="coord-label pt-1 text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-base font-semibold text-ink-900">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{point.description}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
