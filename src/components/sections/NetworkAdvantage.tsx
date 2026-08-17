import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const networks = [
  "Nordic business communities",
  "Chambers of commerce",
  "Agencies",
  "Development organisations",
  "International companies",
  "Service providers",
];

export function NetworkAdvantage() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <SectionHeading
              tone="light"
              eyebrow="Network advantage"
              title="Access is useful. Connected access is better."
              description="NordGate combines chamber networks, companies, decision-makers, agencies, development organisations and service providers. The value isn't one relationship — it's the ability to connect multiple ecosystems commercially."
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 220" aria-hidden="true">
                <g stroke="rgba(0,174,239,0.35)" strokeWidth="1" fill="none">
                  <line x1="150" y1="110" x2="40" y2="30" />
                  <line x1="150" y1="110" x2="260" y2="30" />
                  <line x1="150" y1="110" x2="30" y2="130" />
                  <line x1="150" y1="110" x2="270" y2="130" />
                  <line x1="150" y1="110" x2="80" y2="195" />
                  <line x1="150" y1="110" x2="220" y2="195" />
                </g>
                <circle cx="150" cy="110" r="7" fill="#00aeef" />
              </svg>
              <ul className="relative grid grid-cols-2 gap-x-6 gap-y-8 pt-4">
                {networks.map((n) => (
                  <li key={n} className="text-sm text-white/75">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
