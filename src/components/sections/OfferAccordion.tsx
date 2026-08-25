"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HoneycombGallery } from "@/components/ui/HoneycombGallery";
import { Reveal } from "@/components/ui/Reveal";
import { whatWeDoGalleryImages } from "@/data/honeycomb-images";
import { cn } from "@/lib/utils/cn";

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
    linkLabel: "Explore our approach",
  },
];

export function OfferAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="offer-grid">
          <Reveal className="offer-copy max-w-2xl">
            <p className="eyebrow text-blue-600">What we do</p>
            <h2 className="mt-4 max-w-md text-balance font-serif text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              Market entry built around what you actually need.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
              Nordgate helps B2B companies understand the Nordic opportunity before making expensive
              commitments. Start with the market, then build the right route into it.
            </p>
          </Reveal>

          <Reveal className="offer-accordion-col max-w-3xl border-t border-border-soft">
          {offerItems.map((item, i) => {
            const open = openIndex === i;
            const triggerId = `${baseId}-trigger-${i}`;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <div
                key={item.title}
                className="accordion-row border-b border-border-soft transition-colors duration-200 hover:border-border-strong"
              >
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-sm py-5 text-left transition-colors duration-200 hover:bg-bg-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    <span
                      className={cn(
                        "accordion-title text-base font-semibold sm:text-lg",
                        open ? "text-blue-600" : "text-ink-900"
                      )}
                    >
                      {item.title}
                    </span>
                    <span
                      data-open={open}
                      className="relative flex h-5 w-5 shrink-0 items-center justify-center text-ink-400"
                      aria-hidden="true"
                    >
                      <span className="absolute h-[2px] w-3.5 bg-current" />
                      <span className="accordion-plus-v absolute h-3.5 w-[2px] bg-current" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  data-open={open}
                  className="accordion-content"
                >
                  <div className="accordion-content-inner">
                    <div className="max-w-md pb-5">
                      <p className="text-sm leading-relaxed text-ink-500 sm:text-base">{item.description}</p>
                      {item.href && (
                        <Link
                          href={item.href}
                          className="link-underline mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                        >
                          {item.linkLabel}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </Reveal>

          <Reveal delay className="offer-gallery">
            <HoneycombGallery images={whatWeDoGalleryImages} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
