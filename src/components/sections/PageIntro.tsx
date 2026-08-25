import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Centred page opener shared by the Services, Approach and About routes, so
 * their alignment, sizing and rhythm stay identical. The eyebrow, headline
 * and description reveal together as one group.
 */
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="grid min-h-[clamp(430px,56svh,600px)] place-items-center border-b border-border-soft bg-white pb-[clamp(5rem,9vw,8rem)] pt-[calc(clamp(5rem,9vw,8rem)+2rem)] max-sm:min-h-0 max-sm:pb-[88px] max-sm:pt-[calc(88px+2rem)]">
      <Container>
        <Reveal className="mx-auto flex w-full max-w-[920px] flex-col items-center text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[860px] text-balance font-serif text-4xl font-medium leading-[1.02] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-[660px] text-lg leading-relaxed text-ink-500">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
