import { processFlowStages } from "@/data/process-flow";

// A stable horizontal funnel: all six nodes sit on one shared baseline,
// evenly spaced across six equal columns. Variation lives entirely in the
// connecting lanes, never in node position.
const VIEW_W = 1320;
const VIEW_H = 320;
const BASELINE = 160;
const COLUMN_W = VIEW_W / 6;

const NODE_X = Array.from({ length: 6 }, (_, i) => COLUMN_W * i + COLUMN_W / 2);

type Lane = { d: string; duration: number; delay: number };

/** A single lane between two same-baseline points, bowing to `offset` at
 * its midpoint and returning to the baseline at both ends — so lanes exit
 * and converge cleanly behind the node circles. */
function lane(xa: number, xb: number, offset: number, duration: number, delay: number): Lane {
  const dx = xb - xa;
  const c1x = xa + dx * 0.32;
  const c2x = xa + dx * 0.68;
  return {
    d: `M${xa},${BASELINE} C${c1x},${BASELINE + offset} ${c2x},${BASELINE + offset} ${xb},${BASELINE}`,
    duration,
    delay,
  };
}

// Lane counts narrow toward the middle and widen again — the funnel: three
// inputs converging on assessment, one primary route through targeting and
// setup, then multiple outreach/feedback channels fanning back out.
const SEGMENT_OFFSETS: number[][] = [
  [-20, 0, 20], // 01 → 02: three inputs
  [-15, 15], // 02 → 03: two lanes
  [0], // 03 → 04: one primary lane
  [-15, 15], // 04 → 05: two execution lanes
  [-20, 0, 20], // 05 → 06: three outreach lanes
];

const funnelLanes: Lane[] = SEGMENT_OFFSETS.flatMap((offsets, seg) =>
  offsets.map((offset, i) =>
    lane(NODE_X[seg], NODE_X[seg + 1], offset, 5.4 + i * 0.5, -(seg * 0.8 + i * 1.3))
  )
);

// One subtle feedback lane — 06 back toward 04 — riding just beneath the
// main channel rather than looping under the whole section.
const FEEDBACK: Lane = lane(NODE_X[5], NODE_X[3], 30, 8, -2);

export function HorizontalProcessFlow() {
  const stages = processFlowStages;

  return (
    <div>
      {/* Desktop / tablet — six-column funnel on one shared baseline.
          Hidden below `sm` in favour of the vertical mobile fallback. */}
      <div className="relative mx-auto hidden h-[320px] w-full max-w-[1320px] sm:block">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          focusable="false"
        >
          <path d={FEEDBACK.d} className="flow-feedback-static" />
          <path
            d={FEEDBACK.d}
            className="flow-feedback"
            style={{ animationDuration: `${FEEDBACK.duration}s`, animationDelay: `${FEEDBACK.delay}s` }}
          />

          {funnelLanes.map((l) => (
            <path key={`static-${l.d}`} d={l.d} className="flow-static" />
          ))}
          {funnelLanes.map((l) => (
            <path
              key={`current-${l.d}`}
              d={l.d}
              className="flow-current"
              style={{ animationDuration: `${l.duration}s`, animationDelay: `${l.delay}s` }}
            />
          ))}
        </svg>

        <ol className="relative grid h-full grid-cols-6">
          {stages.map((stage, i) => {
            const textBelow = i % 2 === 0;
            const isFirst = i === 0;
            const isLast = i === stages.length - 1;
            const horizontal = isFirst
              ? { left: 0, textAlign: "left" as const }
              : isLast
                ? { right: 0, textAlign: "right" as const }
                : { left: "50%", transform: "translateX(-50%)", textAlign: "center" as const };
            return (
              <li key={stage.index} className="relative flex items-center justify-center">
                {/* Node — fixed on the shared baseline, unaffected by copy height. */}
                <span className="btn-nordgate absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sm font-semibold lg:h-14 lg:w-14 lg:text-base">
                  {stage.index}
                </span>

                {/* Copy — offset from the node by a fixed pixel gap. Width
                    shrinks with the viewport so it stays inside its own
                    column instead of only widening at desktop sizes. */}
                <div
                  className="absolute w-[clamp(148px,15.5vw,210px)]"
                  style={{ ...horizontal, ...(textBelow ? { top: "calc(50% + 42px)" } : { bottom: "calc(50% + 42px)" }) }}
                >
                  <p className="text-[15px] font-semibold leading-snug text-ink-900 lg:text-[17px]">{stage.title}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-500 lg:text-sm">{stage.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile — simplified single-column fallback. Same six stages, same
          order, one subtle downward current. */}
      <ol className="relative flex flex-col gap-10 sm:hidden">
        {stages.map((stage, i) => (
          <li key={stage.index} className="relative flex gap-5">
            {i < stages.length - 1 && <span className="process-flow-vline" aria-hidden="true" />}
            <span className="btn-nordgate relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
              {stage.index}
            </span>
            <div className="pt-0.5">
              <h3 className="text-base font-semibold text-ink-900">{stage.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500">{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
