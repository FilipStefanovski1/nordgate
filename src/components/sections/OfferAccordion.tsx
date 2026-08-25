"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils/cn";

const offerItems: { title: string; description: string }[] = [
  {
    title: "Market validation",
    description:
      "We test real demand in the Nordics before you commit resources.",
  },
  {
    title: "Go-to-market strategy",
    description:
      "We define the positioning and commercial model that fits how Nordic buyers decide.",
  },
  {
    title: "Buyer and partner identification",
    description:
      "We build the shortlist of accounts, buyers and partners worth approaching first.",
  },
  {
    title: "Business development",
    description:
      "We run follow-up and qualification so interest turns into commercial traction.",
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
              Market entry, built around you.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
              We help B2B companies understand the Nordic opportunity before committing to it —
              then run the commercial work that turns it into real conversations.
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </Reveal>

          <Reveal delay className="offer-image">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded">
              <Image
                src="/event2.jpeg"
                alt="A panel discussion in a chandelier-lit hall at a Nordgate-connected business event"
                fill
                sizes="(min-width: 1024px) 500px, 90vw"
                className="object-cover"
                style={{ objectPosition: "center 45%" }}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
