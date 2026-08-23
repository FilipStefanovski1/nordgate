import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function HumanStory() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
          {/* Photograph — order-first on mobile via natural DOM order */}
          <div>
            <div className="flex aspect-[4/5] w-full flex-col items-center justify-center border border-dashed border-border-strong bg-bg-soft px-8 text-center">
              <p className="text-sm font-medium text-ink-500">Event photograph pending</p>
              <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-ink-400">
                Add the real photograph here — a vertical crop works best for this layout.
              </p>
            </div>
            <p className="coord-label mt-3 text-ink-400">
              [ Caption pending — add event name, location and date ]
            </p>
          </div>

          {/* Story */}
          <div className="flex flex-col justify-center">
            <Eyebrow>The story behind NordGate</Eyebrow>
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
          </div>
        </div>
      </Container>
    </section>
  );
}
