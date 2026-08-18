import { Container } from "@/components/ui/Container";
import { StaggerReveal } from "@/components/animations/StaggerReveal";

const items = [
  "Market Assessment",
  "Target Definition",
  "Account Research",
  "Cold Calling",
  "Email & LinkedIn",
  "Qualification",
  "Meetings",
  "Market Feedback",
];

export function WhatWeHandle() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow text-blue-600">What we actually handle</p>
          <p className="mt-6 text-balance text-2xl font-medium leading-snug tracking-tight text-ink-900 sm:text-3xl">
            NordGate does the work, not just the plan.
          </p>
        </div>

        <StaggerReveal className="mt-12 flex flex-wrap gap-x-3 gap-y-4 sm:mt-14">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-x-3">
              <span className="text-lg font-medium text-ink-700 sm:text-xl">{item}</span>
              {i < items.length - 1 && <span className="text-lg text-border-strong sm:text-xl">·</span>}
            </span>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
