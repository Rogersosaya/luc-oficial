import { Info, Fire, BookOpen, ArrowClockwise } from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/container/Container";
import { StarRating } from "@/components/ui/primitives/StarRating";
import { Badge } from "@/components/ui/primitives/Badge";
import { initials } from "@/lib/utils";
import ButtonAddValoration from "../components/ButtonAddValoration";
import TeacherInsights from "../components/TeacherInsights";
import type { TeacherStats } from "@/actions/teacher/get-teacher-stats";

interface TeacherProp {
  id: string;
  name: string;
  slug: string;
  url: string;
  courses: { course: { name: string } }[];
}

interface Props {
  teacher: TeacherProp;
  stats: TeacherStats;
}

function HeaderMetric({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-muted/60 p-3">
      <span style={{ color }}>{icon}</span>
      <span className="tabular text-base font-bold leading-none">{value}</span>
      <span className="text-[0.7rem] uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function GridPerfil({ teacher, stats }: Props) {
  const courses = teacher.courses.map((c) => c.course.name);
  const hasReviews = stats.count > 0;

  return (
    <Container className="pt-8">
      <div
        role="note"
        className="mb-6 flex items-start gap-3 rounded-xl border border-border bg-primary-soft/50 p-4 text-sm"
      >
        <Info size={18} weight="fill" className="mt-0.5 shrink-0 text-primary" />
        <p className="text-foreground/80">
          <span className="font-semibold">Ten presente:</span> si no llevaste
          clases con este profesor, abstente de dejar reseñas o valoraciones. La
          transparencia es lo que hace útil a Cátedra.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 flex flex-col gap-5 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <span
                aria-hidden
                className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-soft font-display text-xl font-bold text-primary"
              >
                {initials(teacher.name)}
              </span>
              <div className="min-w-0">
                <h1 className="text-xl font-bold leading-tight">{teacher.name}</h1>
                <p className="mt-0.5 text-sm text-muted-foreground">Profesor · UNI</p>
              </div>
            </div>

            {hasReviews ? (
              <div className="flex items-end gap-3 rounded-xl bg-muted/50 p-4">
                <span className="font-display text-4xl font-bold leading-none tabular">
                  {stats.avgRating.toFixed(1)}
                </span>
                <div className="pb-0.5">
                  <StarRating value={stats.avgRating} size={16} />
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stats.count} {stats.count === 1 ? "valoración" : "valoraciones"}
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-xl bg-muted/50 p-4 text-sm text-muted-foreground">
                Aún no tiene valoraciones. Sé el primero en calificarlo.
              </div>
            )}

            {hasReviews && (
              <div className="grid grid-cols-3 gap-2">
                <HeaderMetric
                  icon={<Fire size={18} weight="fill" />}
                  label="Dificultad"
                  value={stats.avgDifficulty.toFixed(1)}
                  color="hsl(var(--metric-difficulty))"
                />
                <HeaderMetric
                  icon={<BookOpen size={18} weight="fill" />}
                  label="Aprendes"
                  value={stats.avgLearning.toFixed(1)}
                  color="hsl(var(--metric-learning))"
                />
                <HeaderMetric
                  icon={<ArrowClockwise size={18} weight="bold" />}
                  label="Repetiría"
                  value={`${stats.repeatPct}%`}
                  color="hsl(var(--metric-repeat))"
                />
              </div>
            )}

            {courses.length > 0 && (
              <div>
                <h2 className="mb-2 text-sm font-semibold">Cursos</h2>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <Badge key={course} variant="neutral">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <ButtonAddValoration teacherId={teacher.id} teacherName={teacher.name} />
          </div>
        </aside>

        {/* Insights */}
        <div className="lg:col-span-2">
          <TeacherInsights teacherId={teacher.id} />
        </div>
      </div>
    </Container>
  );
}

export default GridPerfil;
