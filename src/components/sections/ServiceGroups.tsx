import { Check } from "lucide-react";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import type { ServiceGroup } from "@/data/services";

export function ServiceGroups({ groups }: { groups: ServiceGroup[] }) {
  return (
    <StaggerReveal className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-border-soft p-8">
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
    </StaggerReveal>
  );
}
