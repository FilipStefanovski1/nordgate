"use client";

import { useState } from "react";
import { markets, type MarketInfo } from "@/data/markets";
import { cn } from "@/lib/utils/cn";

const positions: Record<MarketInfo["code"], { top: string; left: string; width: string }> = {
  NO: { top: "6%", left: "6%", width: "34%" },
  SE: { top: "10%", left: "38%", width: "34%" },
  FI: { top: "6%", left: "70%", width: "26%" },
  DK: { top: "68%", left: "22%", width: "30%" },
};

export function NordicMap() {
  const [active, setActive] = useState<MarketInfo["code"]>("SE");
  const current = markets.find((m) => m.code === active)!;

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div className="relative aspect-[5/4] w-full rounded-2xl border border-border-soft bg-bg-soft">
        <svg
          className="absolute inset-0 h-full w-full text-border-strong"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" />
        </svg>

        {markets.map((m) => {
          const pos = positions[m.code];
          const isActive = m.code === active;
          return (
            <button
              key={m.code}
              type="button"
              onMouseEnter={() => setActive(m.code)}
              onFocus={() => setActive(m.code)}
              onClick={() => setActive(m.code)}
              aria-pressed={isActive}
              style={{ top: pos.top, left: pos.left, width: pos.width }}
              className={cn(
                "absolute aspect-square rounded-xl border text-left transition-all duration-300",
                "flex flex-col justify-between p-4",
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
