"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds the `is-visible` class to an element the first time ~15–20% of it
 * enters the viewport, via a single shared IntersectionObserver per call
 * site. Runs once — the observer disconnects after the element is seen.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  // Matches the server's render (`typeof window === "undefined"` → false) so
  // hydration never mismatches; only differs client-side in the rare case a
  // browser genuinely lacks IntersectionObserver.
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
