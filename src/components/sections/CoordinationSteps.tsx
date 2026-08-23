import { coordinationSteps } from "@/data/capabilities";

export function CoordinationSteps() {
  return (
    <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft sm:grid-cols-2 lg:grid-cols-4">
      {coordinationSteps.map((step, i) => (
        <li key={step.title} className="bg-white p-7">
          <span className="coord-label text-blue-600">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-3 text-sm font-semibold text-ink-900">{step.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
