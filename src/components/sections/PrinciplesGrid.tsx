import { useTranslations } from "next-intl";

export function PrinciplesGrid() {
  const t = useTranslations("about");
  const principles = [1, 2, 3, 4].map((n) => ({
    title: t(`principle${n}Title`),
    description: t(`principle${n}Body`),
  }));

  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft sm:grid-cols-2 lg:grid-cols-3">
      {principles.map((p, i) => (
        <div key={p.title} className="bg-white p-8">
          <span className="coord-label text-blue-600">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-base font-semibold text-ink-900">{p.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{p.description}</p>
        </div>
      ))}
    </div>
  );
}
