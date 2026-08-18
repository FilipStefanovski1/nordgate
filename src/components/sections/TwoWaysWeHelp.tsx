import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StaggerReveal } from "@/components/animations/StaggerReveal";

const routes = [
  {
    index: "01",
    title: "Enter the Nordics",
    description:
      "For established international companies looking to enter or grow in Nordic markets. We assess the opportunity and do the commercial work ourselves.",
    cta: "Explore Market Entry",
    href: "/nordic-market-entry",
  },
  {
    index: "02",
    title: "Access Flexible Capabilities",
    description:
      "For Nordic companies that need external professional capacity without building it in-house. We find, vet and coordinate the right partner.",
    cta: "Explore Professional Services",
    href: "/capabilities",
  },
];

export function TwoWaysWeHelp() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <p className="eyebrow text-blue-600">Two ways we help</p>

        <StaggerReveal className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-0">
          {routes.map((route, i) => (
            <div key={route.href} className={i === 1 ? "lg:border-l lg:border-border-soft lg:pl-16" : "lg:pr-16"}>
              <span className="coord-label text-ink-400">{route.index}</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">{route.title}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-500">{route.description}</p>
              <Button href={route.href} variant="ghost" className="group mt-6">
                {route.cta}
              </Button>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
