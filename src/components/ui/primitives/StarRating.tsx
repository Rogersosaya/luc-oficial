import { Star } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  /** 0-5, fractional allowed. */
  value: number;
  size?: number;
  showValue?: boolean;
  className?: string;
}

/**
 * Display-only star rating with smooth partial fill. No JS, server-safe.
 */
export function StarRating({
  value,
  size = 18,
  showValue = false,
  className,
}: StarRatingProps) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const stars = [0, 1, 2, 3, 4];

  return (
    <span
      className={cn("inline-flex items-center gap-1.5", className)}
      role="img"
      aria-label={`${value.toFixed(1)} de 5 estrellas`}
    >
      <span className="relative inline-flex">
        <span className="flex" style={{ color: "hsl(var(--border))" }}>
          {stars.map((i) => (
            <Star key={i} size={size} weight="fill" />
          ))}
        </span>
        <span
          className="absolute inset-0 flex overflow-hidden"
          style={{ width: `${pct}%`, color: "hsl(var(--metric-rating))" }}
        >
          {stars.map((i) => (
            <Star key={i} size={size} weight="fill" className="shrink-0" />
          ))}
        </span>
      </span>
      {showValue && (
        <span className="tabular text-sm font-semibold">{value.toFixed(1)}</span>
      )}
    </span>
  );
}
