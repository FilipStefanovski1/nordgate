import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";

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
    <section className="bg-navy-950 py-24 text-white sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              tone="light"
              size="compact"
              eyebrow="Network advantage"
              title="Access is useful. Connected access is better."
              description="NordGate combines chamber networks, companies, decision-makers, agencies, development organisations and service providers, reached through a presence in Copenhagen, Stockholm and Skopje. The value isn't one relationship. It's the ability to connect multiple ecosystems commercially."
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-x-3 gap-y-2 border-t border-white/10 pt-6">
              {locations.map((loc, i) => (
                <span key={loc.city} className="flex items-center gap-3">
                  <span className="text-base font-medium text-white/80">{loc.city}</span>
                  {i < locations.length - 1 && <span className="text-white/25">·</span>}
                </span>
              ))}
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-8">
              {networks.map((n) => (
                <li key={n} className="text-sm text-white/70">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
