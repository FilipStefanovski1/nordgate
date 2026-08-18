import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { team } from "@/data/team";

const clipFrame = "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)";

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container>
        <ScrollReveal>
          <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl md:text-[2.75rem]">
            A team built for cross-border growth
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:max-w-3xl">
          {team.map((member) => (
            <ScrollReveal key={member.name}>
              <div
                className="relative aspect-[4/5] w-full bg-gradient-to-br from-navy-900 to-blue-700"
                style={{ clipPath: clipFrame }}
              >
                <span className="absolute bottom-6 left-6 text-6xl font-semibold text-white/25">
                  {member.initials}
                </span>
              </div>
              <p className="mt-6 text-xl font-semibold text-ink-900">{member.name}</p>
              <p className="mt-1 text-sm text-ink-500">{member.role}</p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
