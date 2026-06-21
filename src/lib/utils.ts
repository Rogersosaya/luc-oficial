import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Rounds to one decimal and guards against NaN (empty datasets). */
export function safeAverage(values: number[]): number {
  if (values.length === 0) return 0;
  const avg = values.reduce((acc, v) => acc + v, 0) / values.length;
  return Number.isNaN(avg) ? 0 : Number(avg.toFixed(1));
}

/** Formats integers with thousands separators in es locale. */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("es-PE").format(value);
}

/** Up to two uppercase initials from a name. Server-safe. */
export function initials(name?: string | null): string {
  if (!name) return "?";
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}
