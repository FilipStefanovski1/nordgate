import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const offerItems: { title: string; description: string; href?: string; linkLabel?: string }[] = [
  {
    title: "Market validation",
    description:
      "We test real demand for your product in the Nordics before you commit resources, using market research, target-account signals and direct outreach.",
    href: "/nordic-market-entry",
    linkLabel: "See how we validate demand",
  },
  {
    title: "Go-to-market strategy",
    description:
      "We define the right route to market — positioning, sequencing and the commercial model that fits how Nordic buyers actually decide.",
    href: "/nordic-market-entry",
    linkLabel: "Explore market entry",
  },
  {
    title: "Buyer and partner identification",
    description:
      "We build a concrete list of the accounts, buyers and partners worth approaching first, based on fit rather than volume.",
    href: "/capabilities",
    linkLabel: "See our partner network",
  },
  {
    title: "Business development",
    description:
      "Once conversations start, we manage follow-up, qualification and relationship-building so validated interest turns into real commercial traction.",
    href: "/how-it-works",
    linkLabel: "See how we work",
  },
];

export function OfferAccordion() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-20 lg:gap-y-0">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="eyebrow text-blue-600">What we do</p>
            <h2 className="mt-4 max-w-md text-balance font-serif text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              Market entry built around what you actually need.
            </h2>
          </div>

          <div className="lg:col-start-1 lg:row-start-2 lg:mt-5">
            <p className="max-w-md text-base leading-relaxed text-ink-500">
              Nordgate helps B2B companies understand the Nordic opportunity before making
              expensive commitments. Start with the market, then build the right route into it.
            </p>
          </div>

          {/* Photograph — PENDING. Needed: one strong vertical real photograph of a
              founder conversation, business event or Nordic work moment, editorially
              cropped (no card, no shadow, square corners). Do not invent names,
              locations or dates for the caption below. */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-3">
            <div className="flex aspect-[3/4] w-full flex-col items-center justify-center border border-dashed border-border-strong bg-bg-soft px-8 text-center">
              <p className="text-sm font-medium text-ink-500">Photograph pending</p>
              <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-ink-400">
                Add a real vertical photograph here — a founder conversation, business event or
                Nordic work moment.
              </p>
            </div>
            <p className="coord-label mt-3 text-ink-400">
              [ Caption pending — add name, context and date if available ]
            </p>
          </div>

          <div className="lg:col-start-1 lg:row-start-3 lg:mt-10">
            <div className="border-t border-border-soft">
              {offerItems.map((item) => (
                <details key={item.title} className="group border-b border-border-soft py-5" name="offer-accordion">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-semibold text-ink-900 sm:text-lg">{item.title}</span>
                    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center text-ink-400">
                      <Plus className="h-4 w-4 group-open:hidden" aria-hidden="true" />
                      <Minus className="hidden h-4 w-4 group-open:block" aria-hidden="true" />
                    </span>
                  </summary>
                  <div className="mt-3 max-w-md">
                    <p className="text-sm leading-relaxed text-ink-500 sm:text-base">{item.description}</p>
                    {item.href && (
                      <Link
                        href={item.href}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
                      >
                        {item.linkLabel}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
