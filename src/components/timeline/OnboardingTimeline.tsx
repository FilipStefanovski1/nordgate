import { onboardingStages } from "@/data/onboarding";

export function OnboardingTimeline() {
  return (
    <div className="relative">
      {/* Connecting rail */}
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border-soft sm:left-[19px]" />

      <ol className="flex flex-col gap-10 sm:gap-12">
        {onboardingStages.map((stage) => (
          <li key={stage.index} className="relative flex gap-6 pl-0 sm:gap-8">
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-700 bg-blue-700 text-xs font-semibold text-white sm:h-10 sm:w-10">
              {stage.index}
            </span>
            <div className="pt-0.5 sm:pt-1">
              <h3 className="text-base font-semibold text-ink-900 sm:text-lg">{stage.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500">{stage.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
