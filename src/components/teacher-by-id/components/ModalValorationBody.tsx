"use client";

import { Star, Fire, BookOpen, ThumbsUp, ThumbsDown } from "@phosphor-icons/react";
import { useValorationValuesStore } from "@/store/valorationValuesStore";
import { cn } from "@/lib/utils";

const TAGS = [
  "Prepárate para leer",
  "Tiene vocación por el curso",
  "Invita a participar",
  "Zzzzzzz",
  "Trabajos grupales",
  "Learn English",
  "Exposiciones",
  "Muchas tareas",
  "Se aprueba pero no se pondera",
  "Da puntos extras",
  "Ponderable",
  "Pruebas pesadas, pedirás otro cuadernillo",
  "Grosero",
  "Muy exigente",
  "Desorganizado",
  "Llega tarde a las clases",
  "Buena onda",
  "Te cuenta su vida",
  "Es importante que asistas a sus clases",
];

function IconScale({
  label,
  hint,
  value,
  onChange,
  Icon,
  color,
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (v: number) => void;
  Icon: React.ElementType;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-semibold">
          {label}
          {hint && <span className="ml-1 font-normal text-muted-foreground">{hint}</span>}
        </label>
        <span className="tabular text-sm font-semibold">{value}</span>
      </div>
      <div className="mt-2 flex gap-1.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            aria-label={`${label}: ${n}`}
            aria-pressed={n <= value}
            onClick={() => onChange(n)}
            className="rounded-md p-1 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{ color: n <= value ? color : "hsl(var(--border))" }}
          >
            <Icon size={26} weight="fill" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ModalValorationBody() {
  const {
    rating,
    setRating,
    difficulty,
    setDifficulty,
    learning,
    setLearning,
    repeat,
    setRepeat,
    tags,
    setTags,
  } = useValorationValuesStore();

  const toggleTag = (tag: string) =>
    setTags(tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]);

  return (
    <div className="flex flex-col gap-5">
      <IconScale
        label="Valoración general"
        value={rating}
        onChange={setRating}
        Icon={Star}
        color="hsl(var(--metric-rating))"
      />
      <IconScale
        label="Dificultad"
        hint="(¿qué tan difícil fue aprobar?)"
        value={difficulty}
        onChange={setDifficulty}
        Icon={Fire}
        color="hsl(var(--metric-difficulty))"
      />
      <IconScale
        label="Aprendizaje"
        hint="(¿cuánto aprendiste?)"
        value={learning}
        onChange={setLearning}
        Icon={BookOpen}
        color="hsl(var(--metric-learning))"
      />

      <div>
        <label className="text-sm font-semibold">¿Lo volverías a llevar?</label>
        <div className="mt-2 flex gap-2">
          <button
            type="button"
            onClick={() => setRepeat(true)}
            aria-pressed={repeat}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
              repeat
                ? "border-transparent bg-[hsl(var(--metric-repeat)/0.15)] text-[hsl(var(--metric-repeat))]"
                : "border-border text-muted-foreground hover:bg-muted"
            )}
          >
            <ThumbsUp size={18} weight={repeat ? "fill" : "regular"} /> Sí
          </button>
          <button
            type="button"
            onClick={() => setRepeat(false)}
            aria-pressed={!repeat}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
              !repeat
                ? "border-transparent bg-destructive/10 text-destructive"
                : "border-border text-muted-foreground hover:bg-muted"
            )}
          >
            <ThumbsDown size={18} weight={!repeat ? "fill" : "regular"} /> No
          </button>
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold">Etiquetas</label>
        <p className="text-xs text-muted-foreground">
          Elige las que describan mejor su clase.
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {TAGS.map((tag) => {
            const active = tags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={active}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ModalValorationBody;
