"use client";

interface Tag {
  id: string;
  name: string;
}

function Tags({ valorations }: { valorations: { tags: Tag[] }[] }) {
  const counts = new Map<string, number>();
  for (const v of valorations) {
    for (const tag of v.tags) {
      counts.set(tag.name, (counts.get(tag.name) ?? 0) + 1);
    }
  }
  const ranked = Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const max = ranked[0]?.count ?? 1;

  if (ranked.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Etiquetas</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Todavía no hay etiquetas. Aparecerán cuando los estudiantes valoren.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold">Lo que más se repite</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {ranked.map((tag) => {
          const strong = tag.count >= Math.max(2, max * 0.6);
          return (
            <span
              key={tag.name}
              className={
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium " +
                (strong
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground")
              }
            >
              {tag.name}
              <span
                className={
                  "tabular rounded-full px-1.5 text-xs " +
                  (strong ? "bg-primary-foreground/20" : "bg-background/70 text-muted-foreground")
                }
              >
                {tag.count}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Tags;
