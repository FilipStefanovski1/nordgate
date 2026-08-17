import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { coordinationSteps } from "@/data/capabilities";

export function CoordinationSteps() {
  return (
    <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft sm:grid-cols-2 lg:grid-cols-4">
      {coordinationSteps.map((step, i) => (
        <ScrollReveal key={step.title} as="li" className="bg-white p-7">
          <span className="coord-label text-blue-600">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-3 text-sm font-semibold text-ink-900">{step.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
        </ScrollReveal>
      ))}
    </ol>
  );
}
