import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils/cn";

export function FinalCta({ background = "white" }: { background?: "white" | "soft" }) {
  return (
    <section className={cn("py-24 sm:py-28", background === "soft" ? "bg-bg-soft" : "bg-white")}>
      <Container>
        <ScrollReveal className="flex flex-col items-start gap-8 rounded-3xl bg-navy-950 px-8 py-14 sm:px-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-balance max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Let&apos;s find out whether the Nordics make sense for your business.
            </p>
            <p className="coord-label mt-4 text-white/40">Copenhagen · Stockholm · Skopje</p>
          </div>
          <Button href="/contact" variant="onDark" className="shrink-0">
            Discuss market entry
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
