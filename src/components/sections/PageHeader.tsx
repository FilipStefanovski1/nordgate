import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/** Compact page hero — one short headline and at most one line of context. */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="border-b border-border-soft bg-white pt-28 pb-14 sm:pt-32 sm:pb-16">
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[15ch] text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink-500">{description}</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
