import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { capabilityCategories } from "@/data/capabilities";

export function CapabilitiesTeaser() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-blue-600">The other side of NordGate</p>
            <h2 className="mt-4 max-w-md text-balance font-serif text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              The bridge works both ways.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
              International companies use NordGate for Nordic market access. Nordic companies can
              use NordGate for access to vetted external professional capacity.
            </p>
            <Button href="/capabilities" variant="ghost" className="group mt-6">
              Explore Professional Services
            </Button>
          </div>

          <div className="flex flex-col divide-y divide-border-soft border-t border-border-soft">
            {capabilityCategories.map((cat) => (
              <div key={cat.title} className="py-4 text-base font-medium text-ink-700">
                {cat.title}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
