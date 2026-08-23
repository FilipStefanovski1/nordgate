import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { team } from "@/data/team";
import { cn } from "@/lib/utils/cn";

const clipFrame = "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)";

export function TeamSection({ background = "white" }: { background?: "white" | "soft" }) {
  return (
    <section
      id="team"
      className={cn("scroll-mt-24 py-24 sm:py-28", background === "soft" ? "bg-bg-soft" : "bg-white")}
    >
      <Container className="flex flex-col items-center text-center">
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
