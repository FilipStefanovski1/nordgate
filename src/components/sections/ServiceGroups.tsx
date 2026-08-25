import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

/** The three market-entry phases, read from the active locale's messages. */
export function ServiceGroups() {
  const t = useTranslations("services");
  const groups = (["insight", "setup", "execution"] as const).map((k) => ({
    id: k === "execution" ? "sales-execution" : slugify(t(`${k}Title`)),
    title: t(`${k}Title`),
    description: t(`${k}Body`),
    items: [t(`${k}1`), t(`${k}2`), t(`${k}3`)],
  }));

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.id} id={group.id} className="scroll-mt-28 rounded-2xl border border-border-soft p-8">
          <h3 className="text-lg font-semibold text-ink-900">{group.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">{group.description}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {group.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
