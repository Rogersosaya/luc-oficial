"use client";

import * as React from "react";
import { useInView } from "react-intersection-observer";
import { formatNumber } from "@/lib/utils";

interface CountUpProps {
  value: number;
  durationMs?: number;
  className?: string;
}

/**
 * Counts from 0 to `value` when scrolled into view. Honors reduced motion
 * by jumping straight to the final value.
 */
export function CountUp({ value, durationMs = 1400, className }: CountUpProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {formatNumber(display)}
    </span>
  );
}
