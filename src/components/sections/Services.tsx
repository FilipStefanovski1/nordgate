import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Nordic Market Entry",
    description: "Assessing whether, where and how to enter — before you commit resources.",
  },
  {
    title: "Market Validation",
    description: "Testing real demand with the market itself, not assumptions.",
  },
  {
    title: "Go-to-Market Strategy",
    description: "A concrete route to market, sequenced by priority and effort.",
  },
  {
    title: "Business Development",
    description: "Turning validated interest into qualified conversations.",
  },
  {
    title: "Prospect & Partner Identification",
    description: "Finding the companies and people worth approaching first.",
  },
  {
    title: "Local Market Intelligence",
    description: "Ongoing read on competitors, buyers and market movement.",
  },
];

export function Services() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow text-blue-600">What we do</p>
            <h2 className="mt-4 max-w-sm text-balance font-serif text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              Six services. One accountable team.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-500">
              Every engagement draws on the same core capabilities, scoped to what your entry into
              the Nordics actually requires.
            </p>
            <Button href="/nordic-market-entry" variant="ghost" className="group mt-7">
              See the full market-entry offering
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-x-10 border-t border-border-soft sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="border-b border-border-soft py-6">
                <p className="text-base font-semibold text-ink-900 sm:text-lg">{service.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
