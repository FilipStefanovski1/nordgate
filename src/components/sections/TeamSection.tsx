import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { team } from "@/data/team";

export function TeamSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="Team" title="The people behind NordGate." />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <ScrollReveal key={member.name} className="rounded-2xl border border-border-soft p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-semibold text-white">
                  {member.initials}
                </div>
                <div>
                  <p className="text-lg font-semibold text-ink-900">{member.name}</p>
                  <p className="text-sm text-blue-600">{member.role}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {member.bio.map((line) => (
                  <li key={line} className="text-sm leading-relaxed text-ink-500">
                    {line}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
