import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils/cn";

/**
 * A single full-width editorial photograph used as a visual break between
 * text-heavy sections. Purely visual — no heading — so it reads as a pause,
 * not another block of content to parse.
 */
export function EditorialImage({
  src,
  alt,
  position = "center",
  caption,
  background = "white",
}: {
  src: string;
  alt: string;
  position?: string;
  caption?: string;
  background?: "white" | "soft";
}) {
  return (
    <section className={cn("py-24 sm:py-28", background === "soft" ? "bg-bg-soft" : "bg-white")}>
      <Container>
        <Reveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-soft sm:aspect-[2.2/1]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 1400px, 100vw"
              className="object-cover"
              style={{ objectPosition: position }}
            />
          </div>
          {caption && <p className="coord-label mt-3 text-ink-400">{caption}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
