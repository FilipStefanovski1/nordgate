import { processFlowStages } from "@/data/process-flow";

// A stable horizontal funnel: all six nodes sit on one shared baseline,
// evenly spaced across six equal columns. Variation lives entirely in the
// connecting lanes, never in node position.
const VIEW_W = 1320;
const VIEW_H = 320;
const BASELINE = 160;
const COLUMN_W = VIEW_W / 6;

const NODE_X = Array.from({ length: 6 }, (_, i) => COLUMN_W * i + COLUMN_W / 2);

type Lane = { d: string; delay: number };

/**
 * One lane between two node centres. The lane holds its own constant vertical
 * offset for the whole span — both endpoints sit at `baseline + offset`, so
 * parallel lanes never meet and cannot form an eye/leaf outline. `bend` is a
 * shared, very shallow deflection applied identically to every lane in the
 * same connection, keeping the group parallel.
 *
 * fromX/toX are node centres, so each path's first and last ~25px run inside
 * the circle and are masked by the node rendered above this layer.
 */
function createLanePath(fromX: number, toX: number, offset: number, bend: number) {
  const distance = toX - fromX;
  const y = BASELINE + offset;
  const c = y + bend;
  return `M ${fromX} ${y} C ${fromX + distance * 0.33} ${c} ${fromX + distance * 0.66} ${c} ${toX} ${y}`;
}

// The funnel is expressed by how many lanes run between stages — 3 → 2 → 1 →
// 2 → 3 — not by individual connections expanding and contracting.
const CONNECTION_LANE_OFFSETS: number[][] = [
  [-7, 0, 7], // 01 → 02
  [-4, 4], //    02 → 03
  [0], //        03 → 04
  [-4, 4], //    04 → 05
  [-7, 0, 7], // 05 → 06
];

// One shared bend per connection; every lane in that connection uses it, so
// they curve together instead of against each other.
const CONNECTION_BENDS = [2, -2, 0, 2, -2];

const funnelLanes: Lane[] = CONNECTION_LANE_OFFSETS.flatMap((offsets, seg) =>
  offsets.map((offset, i) => ({
    d: createLanePath(NODE_X[seg], NODE_X[seg + 1], offset, CONNECTION_BENDS[seg]),
    // Same speed everywhere; only the phase differs between parallel lanes.
    delay: -(seg * 0.9 + i * 1.7),
  }))
);

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
          {funnelLanes.map((l) => (
            <path key={`base-${l.d}`} d={l.d} className="flow-lane-base" />
          ))}
          {funnelLanes.map((l) => (
            <path
              key={`current-${l.d}`}
              d={l.d}
              className="flow-lane-current"
              style={{ animationDelay: `${l.delay}s` }}
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
