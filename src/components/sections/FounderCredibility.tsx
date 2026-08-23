import { Container } from "@/components/ui/Container";

const ecosystems = ["SMCC", "Blockchain Skopje", "ETHBelgium"];

export function FounderCredibility() {
  return (
    <section className="bg-bg-soft py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-blue-600">Founders</p>
            <h2 className="mt-4 max-w-md text-balance font-serif text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              Built across European business and technology ecosystems.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              Nordgate&apos;s founders have spent years building and contributing to professional
              communities that connect founders, organisations and international ecosystems —
              including <span className="font-medium text-ink-900">SMCC</span>,{" "}
              <span className="font-medium text-ink-900">Blockchain Skopje</span> and{" "}
              <span className="font-medium text-ink-900">ETHBelgium</span>. That work is about
              organising cross-border initiatives, connecting the right people and creating
              opportunities through relationships — the same approach Nordgate applies to Nordic
              market entry.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-3 border-t border-border-strong pt-6">
              {ecosystems.map((name, i) => (
                <span key={name} className="flex items-center gap-x-3">
                  <span className="text-sm font-medium text-ink-700">{name}</span>
                  {i < ecosystems.length - 1 && <span className="text-sm text-border-strong">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
