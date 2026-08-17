import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { processStages } from "@/data/process";

export function ProcessSteps() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="How NordGate works" title="From market insight to a running Nordic sales motion." />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processStages.map((stage) => (
            <ScrollReveal key={stage.index} className="border-t-2 border-border-soft pt-6">
              <span className="coord-label text-blue-600">{stage.index}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">{stage.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{stage.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
