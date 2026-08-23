import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

export function FinalCta({ background = "white" }: { background?: "white" | "soft" }) {
  return (
    <section className={cn("py-24 sm:py-28", background === "soft" ? "bg-bg-soft" : "bg-white")}>
      <Container>
        <div className="flex flex-col items-start gap-8 rounded-lg bg-navy-950 px-8 py-14 sm:px-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-balance max-w-xl font-serif text-2xl font-medium leading-tight text-white sm:text-3xl">
              Considering the Nordics? Start by testing the opportunity.
            </p>
            <p className="coord-label mt-4 text-white/40">Copenhagen · Stockholm · Skopje</p>
          </div>
          <Button href="/contact" variant="onDark" className="shrink-0">
            Book a market assessment
          </Button>
        </div>
      </Container>
    </section>
  );
}
