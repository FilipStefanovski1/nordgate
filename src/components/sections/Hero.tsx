import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[max(720px,92svh)] w-full overflow-hidden bg-navy-950">
      {/* Background artwork */}
      <div className="absolute inset-0">
        <Image
          src="/brand/nordgate-map-wide.png"
          alt="Map of the Nordic region and Northern Europe, highlighting Norway, Sweden, Finland and Denmark"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[62%_center] lg:object-center"
        />
      </div>

      {/* Overlays — uniform tint, left-side gradient for copy legibility */}
      <div className="absolute inset-0 bg-navy-950/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/45 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-1 items-end">
        <div className="w-full border-t border-white/10 pl-6 pr-6 pb-16 pt-24 sm:pl-10 sm:pr-10 sm:pb-20 lg:pl-[9vw] lg:pr-10 lg:pb-24">
          <div className="max-w-[900px]">
            <span className="coord-label text-cyan-300">Nordic market-entry &amp; business-development consulting</span>

            <h1 className="mt-7 text-balance font-serif text-[2.15rem] font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.1rem] lg:leading-[1.05]">
              Expand into the Nordics without building a local sales team from day one.
            </h1>

            <p className="mt-7 max-w-[600px] text-balance text-base leading-relaxed text-white/70 sm:text-lg">
              Nordgate helps international B2B companies validate demand, identify the right
              buyers and build a practical route into Northern Europe.
            </p>

            <div className="mt-10 flex flex-col gap-x-8 gap-y-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-7 py-3.5 text-[15px] font-semibold text-navy-950 transition-colors duration-200 hover:bg-cyan-300"
              >
                Book a market assessment
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#approach"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-white/80 transition-colors duration-200 hover:text-white"
              >
                Explore our approach
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
