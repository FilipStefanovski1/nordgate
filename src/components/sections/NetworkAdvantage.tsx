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

const hubPositions = [
  { x: 70, y: 40 },
  { x: 150, y: 20 },
  { x: 230, y: 45 },
];

export function NetworkAdvantage() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28">
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
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 220" aria-hidden="true">
                <g stroke="rgba(0,174,239,0.3)" strokeWidth="1" fill="none">
                  {hubPositions.map((hub) =>
                    [
                      [40, 195],
                      [150, 210],
                      [260, 195],
                    ].map(([x, y], j) => <line key={`${hub.x}-${x}-${j}`} x1={hub.x} y1={hub.y} x2={x} y2={y} />)
                  )}
                  <line x1={hubPositions[0].x} y1={hubPositions[0].y} x2={hubPositions[1].x} y2={hubPositions[1].y} strokeDasharray="2 3" />
                  <line x1={hubPositions[1].x} y1={hubPositions[1].y} x2={hubPositions[2].x} y2={hubPositions[2].y} strokeDasharray="2 3" />
                </g>
                {hubPositions.map((hub, i) => (
                  <circle key={locations[i].city} cx={hub.x} cy={hub.y} r="5" fill="#00aeef" />
                ))}
              </svg>

              <div className="relative flex justify-between px-1">
                {locations.map((loc) => (
                  <span key={loc.city} className="coord-label text-cyan-300">
                    {loc.city}
                  </span>
                ))}
              </div>

              <ul className="relative mt-24 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-28">
                {networks.map((n) => (
                  <li key={n} className="text-sm text-white/75">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
