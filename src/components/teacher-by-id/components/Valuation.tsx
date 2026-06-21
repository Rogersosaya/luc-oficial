"use client";

import { Star } from "@phosphor-icons/react";
import { Progress } from "@/components/ui/primitives/Progress";

interface Valoration {
  rating: number;
}

function Valuation({ valorations }: { valorations: Valoration[] }) {
  const total = valorations.length;
  const pctFor = (n: number) =>
    total === 0
      ? 0
      : Number(
          (
            (valorations.filter((v) => v.rating === n).length / total) *
            100
          ).toFixed(0)
        );

  const rows = [5, 4, 3, 2, 1].map((star) => ({ star, pct: pctFor(star) }));

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold">Distribución de calificaciones</h2>
      <div className="mt-4 flex flex-col gap-2.5">
        {rows.map(({ star, pct }) => (
          <div key={star} className="flex items-center gap-3">
            <span className="flex w-10 items-center gap-1 text-sm text-muted-foreground tabular">
              {star}
              <Star size={13} weight="fill" className="text-[hsl(var(--metric-rating))]" />
            </span>
            <Progress
              value={pct}
              color="hsl(var(--metric-rating))"
              className="flex-1"
            />
            <span className="w-10 text-right text-sm text-muted-foreground tabular">
              {pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Valuation;
