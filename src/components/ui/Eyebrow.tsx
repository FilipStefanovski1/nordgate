import { cn } from "@/lib/utils/cn";

export function Eyebrow({
  children,
  className,
  tone = "blue",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "blue" | "white" | "cyan";
}) {
  const toneClass =
    tone === "white" ? "text-white/70" : tone === "cyan" ? "text-cyan-400" : "text-blue-600";
  return (
    <span className={cn("eyebrow inline-flex items-center gap-2", toneClass, className)}>
      <span className="h-[3px] w-[3px] rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}
