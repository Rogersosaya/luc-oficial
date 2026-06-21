import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0-100 */
  value: number;
  /** CSS color for the filled portion (defaults to primary). */
  color?: string;
  trackClassName?: string;
}

/**
 * Lightweight, accessible progress bar. Static (no JS) so it can render in
 * Server Components. Pass `color` with an hsl(var(--metric-*)) token.
 */
export function Progress({
  value,
  color,
  className,
  trackClassName,
  ...props
}: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-muted",
        trackClassName,
        className
      )}
      {...props}
    >
      <div
        className="h-full rounded-full transition-[width] duration-700 ease-out"
        style={{
          width: `${clamped}%`,
          backgroundColor: color ?? "hsl(var(--primary))",
        }}
      />
    </div>
  );
}
