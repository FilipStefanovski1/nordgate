import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const readyFor = [
  "A proven offering with existing customers",
  "Commercial traction in your home market",
  "Operational capacity to deliver on new business",
  "International ambitions and management commitment",
  "Willingness to adapt positioning to a new market",
];

export function WhoWeWorkWith() {
  return (
    <section className="bg-bg-soft py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal>
            <SectionHeading
              size="compact"
              eyebrow="Who we work with"
              title="Built for companies that are ready for the next market."
              description="NordGate works best with businesses that already know how to sell. They just don't yet know how to sell in the Nordics."
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border-soft bg-white p-7">
                <div className="flex items-center gap-2 text-blue-700">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  <p className="text-sm font-semibold">Strong fit</p>
                </div>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {readyFor.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-dashed border-border-strong p-7">
                <div className="flex items-center gap-2 text-ink-500">
                  <X className="h-4 w-4" aria-hidden="true" />
                  <p className="text-sm font-semibold">Not the right fit yet</p>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-500">
                  NordGate is not primarily designed for businesses still testing whether their
                  basic model works. If you&apos;re validating product-market fit at home, that
                  work needs to happen before Nordic expansion.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
