import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { capabilityCategories } from "@/data/capabilities";

export function CapabilitiesTeaser() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow text-blue-600">The other side of NordGate</p>
            <h2 className="mt-4 max-w-md text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              The bridge works both ways.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
              International companies use NordGate for Nordic market access. Nordic companies can
              use NordGate for access to vetted external professional capacity.
            </p>
            <Button href="/capabilities" variant="ghost" className="group mt-6">
              Explore Professional Services
            </Button>
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
