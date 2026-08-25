import { useTranslations } from "next-intl";



export function ResponsibilitySplit() {
  const t = useTranslations("approach");
  const clientProvides = [t("client1"), t("client2"), t("client3"), t("client4")];
  const nordgateProvides = [t("nordgate1"), t("nordgate2"), t("nordgate3"), t("nordgate4")];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="rounded-2xl border border-border-soft p-8 sm:p-10">
        <p className="eyebrow text-ink-400">{t("youProvide")}</p>
        <ul className="mt-6 flex flex-col gap-4">
          {clientProvides.map((item) => (
            <li key={item} className="border-b border-border-soft pb-4 text-sm leading-relaxed text-ink-700 last:border-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl bg-navy-950 p-8 text-white sm:p-10">
        <p className="eyebrow text-white/50">{t("weProvide")}</p>
        <ul className="mt-6 flex flex-col gap-4">
          {nordgateProvides.map((item) => (
            <li key={item} className="border-b border-white/10 pb-4 text-sm leading-relaxed text-white/80 last:border-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
