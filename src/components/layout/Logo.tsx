import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "color" }: { variant?: "color" | "white" }) {
  const src = variant === "white" ? "/brand/nordgate-logo-white.png" : "/brand/nordgate-logo.png";
  return (
    <Link href="/" className="flex items-center" aria-label="NordGate — home">
      <Image
        src={src}
        alt="NordGate"
        width={796}
        height={165}
        priority
        sizes="(min-width: 640px) 155px, 135px"
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  );
}
