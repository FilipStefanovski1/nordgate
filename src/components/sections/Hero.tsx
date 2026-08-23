import Link from "next/link";

const helpItems = [
  "Market validation",
  "Go-to-market strategy",
  "Buyer and partner identification",
  "Business development",
];

export function Hero() {
  return (
    <section className="bg-[#f8f6f2] pb-14 pt-32 sm:pt-36 lg:pt-40">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.85fr_1fr] lg:gap-16">
          {/* Main statement */}
          <div>
            <p className="coord-label text-blue-600">Nordic market entry · Business development</p>

            <h1 className="mt-6 max-w-[17ch] text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy-950 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              A practical route into the Nordic market.
            </h1>

            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-ink-500 sm:text-lg">
              We help international B2B companies validate demand, understand the market and
              begin the right commercial conversations across Northern Europe.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-navy-950 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Book a market assessment
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-sm border border-border-strong px-7 py-3.5 text-[15px] font-semibold text-navy-950 transition-colors duration-200 hover:border-blue-700 hover:text-blue-700"
              >
                See how we work
              </Link>
            </div>
          </div>

          {/* Orientation column */}
          <div className="border-t border-border-strong pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-1">
            <p className="eyebrow text-ink-400">What we help with</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {helpItems.map((item) => (
                <li key={item} className="text-sm font-medium text-ink-700 sm:text-base">
                  {item}
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-8 text-ink-400">Focus</p>
            <p className="mt-3 text-sm font-medium text-ink-700 sm:text-base">
              Nordics · B2B · Cross-border growth
            </p>
          </div>
        </div>

        {/* Transition statement */}
        <div className="mt-14 border-t border-border-strong pt-8 sm:mt-16">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-10">
            <p className="text-lg font-semibold text-navy-950 sm:text-xl">
              Local understanding before expensive commitment.
            </p>
            <p className="max-w-[54ch] text-sm leading-relaxed text-ink-500 sm:text-base">
              Test the opportunity, define the route and enter with clearer commercial direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
