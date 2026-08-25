import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils/cn";

/**
 * A 45/55 photograph-and-copy split, matching the ratio already used by
 * HumanStory. Image is first in DOM (so mobile always reads photo → copy);
 * `imageSide` only changes the desktop order.
 */
export function ImageTextSplit({
  eyebrow,
  title,
  description,
  children,
  image,
  imageSide = "left",
  background = "white",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  image: { src: string; alt: string; position?: string };
  imageSide?: "left" | "right";
  background?: "white" | "soft" | "navy";
}) {
  const tone = background === "navy" ? "light" : "dark";
  const bgClass =
    background === "navy" ? "bg-navy-950" : background === "soft" ? "bg-bg-soft" : "bg-white";

  return (
    <section className={cn("py-24 sm:py-28", bgClass)}>
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center lg:gap-16">
          <Reveal delay className={imageSide === "right" ? "lg:order-2" : "lg:order-1"}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-soft">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
                style={{ objectPosition: image.position ?? "center" }}
              />
            </div>
          </Reveal>

          <Reveal className={imageSide === "right" ? "lg:order-1" : "lg:order-2"}>
            <SectionHeading tone={tone} eyebrow={eyebrow} title={title} description={description} />
            {children}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
