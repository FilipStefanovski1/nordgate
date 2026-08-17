"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "./gsapConfig";

type CountUpProps = {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

function format(value: number, decimals: number) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/** Animates a numeric value change smoothly — used for live-updating calculator outputs. */
export function CountUp({ value, duration = 0.6, decimals = 0, prefix = "", suffix = "", className }: CountUpProps) {
  const [display, setDisplay] = useState(value);
  const proxy = useRef({ val: value });
  const reduced = typeof window !== "undefined" && prefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const obj = proxy.current;
    const tween = gsap.to(obj, {
      val: value,
      duration,
      ease: "power2.out",
      onUpdate: () => setDisplay(obj.val),
    });
    return () => {
      tween.kill();
    };
  }, [value, duration, reduced]);

  return (
    <span className={className}>
      {prefix}
      {format(reduced ? value : display, decimals)}
      {suffix}
    </span>
  );
}
