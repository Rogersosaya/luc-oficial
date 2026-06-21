"use client";

import { Fire, BookOpen, ArrowClockwise } from "@phosphor-icons/react";
import { MetricMeter } from "@/components/ui/primitives/MetricMeter";
import { safeAverage } from "@/lib/utils";

interface Valoration {
  difficulty: number;
  learning: number;
  repeat: boolean;
}

function Resenia({ valorations }: { valorations: Valoration[] }) {
  const total = valorations.length;
  const avgDifficulty = safeAverage(valorations.map((v) => v.difficulty));
  const avgLearning = safeAverage(valorations.map((v) => v.learning));
  const repeatPct =
    total === 0
      ? 0
      : Math.round(
          (valorations.filter((v) => v.repeat).length / total) * 100
        );

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold">Cómo lo viven los estudiantes</h2>
      <div className="mt-5 flex flex-col gap-5">
        <MetricMeter
          label="Dificultad"
          value={avgDifficulty}
          color="hsl(var(--metric-difficulty))"
          icon={<Fire size={18} weight="fill" />}
          hint="Qué tan difícil resulta aprobar el curso."
        />
        <MetricMeter
          label="Aprendizaje"
          value={avgLearning}
          color="hsl(var(--metric-learning))"
          icon={<BookOpen size={18} weight="fill" />}
          hint="Cuánto sienten los estudiantes que aprenden."
        />
        <MetricMeter
          label="Lo volvería a llevar"
          value={repeatPct}
          max={100}
          display={`${repeatPct}%`}
          color="hsl(var(--metric-repeat))"
          icon={<ArrowClockwise size={18} weight="bold" />}
          hint="Porcentaje que repetiría con este profesor."
        />
      </div>
    </div>
  );
}

export default Resenia;
