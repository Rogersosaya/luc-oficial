import * as React from "react";
import { Progress } from "./Progress";
import { cn } from "@/lib/utils";

interface MetricMeterProps {
  label: string;
  /** Raw value. */
  value: number;
  /** Max for the scale (5 for ratings, 100 for percentages). */
  max?: number;
  /** hsl(var(--metric-*)) token. */
  color?: string;
  /** Displayed value text. Defaults to value (one decimal) + /max. */
  display?: string;
  hint?: string;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Labeled horizontal meter. Replaces gauge/speedometer widgets with a
 * legible, accessible bar that reads in both themes.
 */
export function MetricMeter({
  label,
  value,
  max = 5,
  color,
  display,
  hint,
  icon,
  className,
}: MetricMeterProps) {
  const pct = (value / max) * 100;
  const valueText = display ?? `${value.toFixed(1)}`;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
          {icon ? (
            <span style={{ color: color ?? "hsl(var(--primary))" }}>{icon}</span>
          ) : null}
          {label}
        </span>
        <span className="flex items-baseline gap-1">
          <span className="tabular text-sm font-semibold">{valueText}</span>
          {!display && (
            <span className="text-xs text-muted-foreground">/ {max}</span>
          )}
        </span>
      </div>
      <Progress value={pct} color={color} />
      {hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}
