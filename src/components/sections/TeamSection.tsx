import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/data/team";
import { cn } from "@/lib/utils/cn";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5zM.24 8.24h4.48V23H.24V8.24zm7.53 0h4.3v2.01h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.88V23h-4.48v-6.42c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V23H7.77V8.24z" />
    </svg>
  );
}

const clipFrame = "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)";

export function TeamSection({ background = "white" }: { background?: "white" | "soft" }) {
  return (
    <section
      id="team"
      className={cn("scroll-mt-24 py-24 sm:py-28", background === "soft" ? "bg-bg-soft" : "bg-white")}
    >
      <Container className="flex flex-col items-center text-center">
        <Reveal className="flex w-full flex-col items-center">
          <h2 className="max-w-xl text-balance font-serif text-3xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-4xl md:text-[2.75rem]">
            A team built for cross-border growth
          </h2>

          <div className="mx-auto mt-16 grid w-full max-w-3xl grid-cols-1 gap-x-10 gap-y-16 text-left sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name}>
                <div
                  className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-navy-900 to-blue-700"
                  style={{ clipPath: clipFrame }}
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="absolute bottom-6 left-6 text-6xl font-semibold text-white/25">
                      {member.initials}
                    </span>
                  )}
                </div>
                <p className="mt-6 text-xl font-semibold text-ink-900">{member.name}</p>
                <p className="mt-1 text-sm text-ink-500">{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-ink-500 transition-colors duration-200 hover:border-blue-600 hover:text-blue-600"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
