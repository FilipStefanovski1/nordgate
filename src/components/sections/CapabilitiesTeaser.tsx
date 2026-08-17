import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { Button } from "@/components/ui/Button";
import { capabilityCategories } from "@/data/capabilities";

export function CapabilitiesTeaser() {
  return (
    <section className="border-y border-border-soft bg-bg-soft py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <ScrollReveal>
            <SectionHeading
              eyebrow="The reverse direction"
              title="Nordic company? Access the right international capabilities."
              description="NordGate also helps Nordic companies reach vetted international service providers, specialists and operational capacity — selected, vetted and coordinated on your behalf."
            />
            <div className="mt-8">
              <Button href="/capabilities" variant="secondary" icon>
                Explore capabilities
              </Button>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {capabilityCategories.map((cat) => (
              <div key={cat.title} className="rounded-xl border border-border-soft bg-white p-5">
                <p className="text-sm font-semibold text-ink-900">{cat.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{cat.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
