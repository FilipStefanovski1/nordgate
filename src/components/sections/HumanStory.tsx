import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function HumanStory() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
          {/* Photograph — order-first on mobile via natural DOM order, reveals ~80ms after the copy */}
          <Reveal delay>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-soft">
              <Image
                src="/samuelandanders.jpeg"
                alt="Samuel and Anders, Co-Founders of NordGate"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="coord-label mt-3 text-ink-400">
              Samuel and Anders, Co-Founders of NordGate
            </p>
          </Reveal>

          {/* Story */}
          <Reveal className="flex flex-col justify-center">
            <Eyebrow>Built through real relationships</Eyebrow>
            <h2 className="mt-5 max-w-lg text-balance font-serif text-3xl font-medium leading-[1.15] tracking-tight text-ink-900 sm:text-4xl">
              Nordgate started with a simple observation.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg">
              Companies rarely struggle to enter new markets because they lack ambition. They
              struggle because they lack the right local context, relationships and people on the
              ground.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg">
              Through building communities and working across European business ecosystems, we
              repeatedly saw promising companies struggle to turn international interest into real
              opportunities. Nordgate was created to close that gap — starting with the Nordics.
            </p>
            <p className="mt-8 max-w-lg border-l-2 border-blue-700 pl-5 text-base font-medium leading-relaxed text-ink-900 sm:text-lg">
              Nordgate is built around relationships, local understanding and the belief that
              expansion works better when someone helps open the right doors.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
