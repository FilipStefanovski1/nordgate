import { partnerCriteria } from "@/data/capabilities";

export function PartnerCriteria() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
      {partnerCriteria.map((criterion, i) => (
        <div key={criterion} className="flex items-baseline gap-4 border-b border-border-soft pb-5">
          <span className="coord-label text-ink-400">{String(i + 1).padStart(2, "0")}</span>
          <p className="text-base text-ink-800">{criterion}</p>
        </div>
      ))}
    </div>
  );
}
