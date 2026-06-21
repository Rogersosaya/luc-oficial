"use client";

import { useEffect, useState } from "react";
import { useValorationsStore } from "@/store/valorationsStore";
import Valuation from "./Valuation";
import Resenia from "./Resenia";
import Tags from "./Tags";
import { Skeleton } from "@/components/ui/primitives/Skeleton";

function InsightsSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {[0, 1].map((i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-6">
          <Skeleton className="h-5 w-48" />
          <div className="mt-5 flex flex-col gap-3">
            {[0, 1, 2, 3].map((j) => (
              <Skeleton key={j} className="h-3 w-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TeacherInsights({ teacherId }: { teacherId: string }) {
  const { valorations, getValorations } = useValorationsStore();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      await getValorations(teacherId);
      if (active) setLoaded(true);
    })();
    return () => {
      active = false;
    };
  }, [teacherId, getValorations]);

  if (!loaded) return <InsightsSkeleton />;

  if (valorations.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-border p-10 text-center">
        <h2 className="text-lg font-semibold">Todavía no hay valoraciones</h2>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Cuando los estudiantes califiquen a este profesor verás aquí la
          distribución de notas, dificultad, aprendizaje y etiquetas.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <Valuation valorations={valorations} />
      <Resenia valorations={valorations} />
      <Tags valorations={valorations} />
    </div>
  );
}

export default TeacherInsights;
