"use client";

import { useState } from "react";
import { markets, type MarketInfo } from "@/data/markets";
import { cn } from "@/lib/utils/cn";

const gridArea: Record<MarketInfo["code"], string> = {
  NO: "no",
  SE: "se",
  FI: "fi",
  DK: "dk",
};

export function NordicMap() {
  const [active, setActive] = useState<MarketInfo["code"]>("SE");
  const current = markets.find((m) => m.code === active)!;

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div
        className="grid aspect-[5/4] w-full gap-3 rounded-2xl border border-border-soft bg-bg-soft p-3"
        style={{
          gridTemplateAreas: `"no se fi" "no se ." ". dk ."`,
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 0.5fr 0.7fr",
        }}
      >
        {markets.map((m) => {
          const isActive = m.code === active;
          return (
            <button
              key={m.code}
              type="button"
              onMouseEnter={() => setActive(m.code)}
              onFocus={() => setActive(m.code)}
              onClick={() => setActive(m.code)}
              aria-pressed={isActive}
              style={{ gridArea: gridArea[m.code] }}
              className={cn(
                "flex min-h-16 flex-col justify-between rounded-xl border p-4 text-left transition-all duration-300",
                isActive
                  ? "border-blue-700 bg-navy-950 text-white shadow-lg shadow-blue-700/20"
                  : "border-border-strong bg-white text-ink-700 hover:border-blue-500"
              )}
            >
              <span className="coord-label opacity-60">{m.code}</span>
              <span className="text-lg font-semibold sm:text-xl">{m.name}</span>
            </button>
          );
        })}
      </div>

      <div key={current.code} className="rounded-2xl border border-border-soft bg-white p-8 sm:p-10">
        <p className="eyebrow text-blue-600">{current.name}</p>
        <dl className="mt-6 flex flex-col gap-6">
          <div>
            <dt className="text-sm font-semibold text-ink-900">Market characteristics</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">{current.characteristics}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-ink-900">Sales environment</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">{current.salesEnvironment}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-ink-900">Entry considerations</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">{current.entryConsiderations}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-ink-900">Business behaviour</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-ink-500">{current.businessBehavior}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
