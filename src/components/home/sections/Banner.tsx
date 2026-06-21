import Link from "next/link";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/container/Container";
import { SearchBox } from "@/components/ui/SearchBox";
import { formatNumber } from "@/lib/utils";

interface BannerProps {
  teachersTotal: number;
  valorationsTotal: number;
}

function Banner({ teachersTotal, valorationsTotal }: BannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      {/* Tinted ambient backdrop (brand blue, low opacity) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% -10%, hsl(var(--primary) / 0.14), transparent 70%)",
        }}
      />
      <Container className="relative flex min-h-[78dvh] flex-col items-center justify-center py-20 text-center">
        <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkle size={14} weight="fill" className="text-primary" />
          Reseñas de estudiantes de la UNI
        </span>

        <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Elige a tus profesores con datos, no con rumores.
        </h1>

        <p className="mt-5 max-w-prose text-base text-muted-foreground sm:text-lg">
          Calificaciones reales sobre dificultad, aprendizaje y reseñas honestas
          de quienes ya llevaron el curso.
        </p>

        <div className="mt-8 w-full max-w-xl">
          <SearchBox />
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground tabular">
            {formatNumber(teachersTotal)}
          </span>{" "}
          profesores ·{" "}
          <span className="font-semibold text-foreground tabular">
            {formatNumber(valorationsTotal)}
          </span>{" "}
          valoraciones ·{" "}
          <Link href="/teachers" className="font-medium text-primary hover:underline">
            ver todos
          </Link>
        </p>
      </Container>
    </section>
  );
}

export default Banner;
