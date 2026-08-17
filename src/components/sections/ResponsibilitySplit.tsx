import { ScrollReveal } from "@/components/animations/ScrollReveal";

const clientProvides = [
  "A proven product or service with existing customers",
  "Management commitment to Nordic expansion",
  "Delivery capacity to fulfil new business",
  "Fast decisions on pricing and positioning questions",
  "Openness to adapt messaging for a new market",
];

const nordgateProvides = [
  "Market assessment and country prioritisation",
  "ICP, target account list and messaging",
  "Direct outreach across calls, email and LinkedIn",
  "Qualified meetings with real decision-makers",
  "Ongoing account development and market feedback",
];

export function ResponsibilitySplit() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <ScrollReveal className="rounded-2xl border border-border-soft p-8 sm:p-10">
        <p className="eyebrow text-ink-400">What you provide</p>
        <ul className="mt-6 flex flex-col gap-4">
          {clientProvides.map((item) => (
            <li key={item} className="border-b border-border-soft pb-4 text-sm leading-relaxed text-ink-700 last:border-0">
              {item}
            </li>
          ))}
        </ul>
      </ScrollReveal>
      <ScrollReveal className="rounded-2xl bg-navy-950 p-8 text-white sm:p-10">
        <p className="eyebrow text-white/50">What NordGate provides</p>
        <ul className="mt-6 flex flex-col gap-4">
          {nordgateProvides.map((item) => (
            <li key={item} className="border-b border-white/10 pb-4 text-sm leading-relaxed text-white/80 last:border-0">
              {item}
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </div>
  );
}
