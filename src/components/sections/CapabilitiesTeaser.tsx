import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { Button } from "@/components/ui/Button";
import { capabilityCategories } from "@/data/capabilities";

export function CapabilitiesTeaser() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <ScrollReveal>
            <SectionHeading
              size="compact"
              eyebrow="The reverse direction"
              title="Nordic company? Access the right international capabilities."
              description="NordGate also helps Nordic companies reach vetted international service providers and operational capacity, selected, vetted and coordinated on your behalf."
            />
            <div className="mt-8">
              <Button href="/capabilities" variant="secondary" icon>
                Explore capabilities
              </Button>
            </div>
          </ScrollReveal>

          <StaggerReveal className="flex flex-wrap gap-3">
            {capabilityCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-ink-700"
              >
                {cat.title}
              </div>
            ))}
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
