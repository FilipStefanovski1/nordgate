import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { HorizontalProcessFlow } from "@/components/process/HorizontalProcessFlow";
import { cn } from "@/lib/utils/cn";

/** The onboarding funnel with a compact heading. The diagram is the section's
 *  visual — the copy above it stays deliberately short. */
export function ProcessSection({
  eyebrow = "Onboarding",
  title = "From first conversation to live outreach.",
  description,
  background = "soft",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  background?: "white" | "soft";
}) {
  return (
    <section className={cn("py-16 sm:py-20", background === "soft" ? "bg-bg-soft" : "bg-white")}>
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-[16ch] text-balance font-serif text-3xl font-medium leading-[1.08] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          {description && (
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-ink-500">{description}</p>
          )}
        </Reveal>
        <Reveal delay className="mt-10">
          <HorizontalProcessFlow />
        </Reveal>
      </Container>
    </section>
  );
}
