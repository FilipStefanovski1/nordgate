import Image from "next/image";
import type { HoneycombImage } from "@/data/honeycomb-images";
import { cn } from "@/lib/utils/cn";

type SixImages = [
  HoneycombImage,
  HoneycombImage,
  HoneycombImage,
  HoneycombImage,
  HoneycombImage,
  HoneycombImage,
];

/**
 * Two offset columns of three hexagonal photographs each, interlocking
 * into a honeycomb formation. Pure CSS (clip-path + flex) — no JS
 * positioning, so it renders identically without JavaScript.
 */
export function HoneycombGallery({
  images,
  className,
}: {
  images: SixImages;
  className?: string;
}) {
  const columnOne = images.slice(0, 3);
  const columnTwo = images.slice(3, 6);

  return (
    <div className={cn("honeycomb", className)}>
      <div className="honeycomb-col">
        {columnOne.map((image) => (
          <HoneycombHex key={image.src} image={image} />
        ))}
      </div>
      <div className="honeycomb-col honeycomb-col-offset">
        {columnTwo.map((image) => (
          <HoneycombHex key={image.src} image={image} />
        ))}
      </div>
    </div>
  );
}

function HoneycombHex({ image }: { image: HoneycombImage }) {
  return (
    <div className="honeycomb-hex">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 210px, (min-width: 640px) 150px, 130px"
        className="object-cover"
        style={{ objectPosition: image.position ?? "center" }}
      />
    </div>
  );
}
