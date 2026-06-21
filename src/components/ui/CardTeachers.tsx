import Link from "next/link";
import { Fire, BookOpen, ArrowClockwise, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { StarRating } from "@/components/ui/primitives/StarRating";
import type { TeacherStats } from "@/actions/teacher/get-teacher-stats";
import { cn, initials } from "@/lib/utils";

export interface TeacherCardData {
  id?: string;
  name: string;
  slug: string;
  url?: string;
  courses: { name: string }[];
  stats: TeacherStats;
}

function MiniStat({
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
    <div className="flex flex-col items-center gap-1 rounded-lg bg-muted/60 py-2">
      <span style={{ color }} className="flex items-center">
        {icon}
      </span>
      <span className="tabular text-sm font-semibold leading-none">{value}</span>
      <span className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function CardTeachers({ teacher }: { teacher: TeacherCardData }) {
  const { stats } = teacher;
  const hasReviews = stats.count > 0;
  const primaryCourse = teacher.courses[0]?.name;
  const extraCourses = teacher.courses.length - 1;

  return (
    <Link
      href={`/teacher/${teacher.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-start gap-3.5">
        <span
          aria-hidden
          className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft font-display text-base font-semibold text-primary"
        >
          {initials(teacher.name)}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold leading-snug" title={teacher.name}>
            {teacher.name}
          </h3>
          {primaryCourse && (
            <p className="mt-0.5 truncate text-sm text-muted-foreground" title={primaryCourse}>
              {primaryCourse}
              {extraCourses > 0 && (
                <span className="text-muted-foreground/70"> +{extraCourses}</span>
              )}
            </p>
          )}
        </div>
      </div>

      {hasReviews ? (
        <>
          <div className="mt-4 flex items-center gap-2.5">
            <span className="font-display text-2xl font-bold leading-none tabular">
              {stats.avgRating.toFixed(1)}
            </span>
            <div className="flex flex-col">
              <StarRating value={stats.avgRating} size={15} />
              <span className="mt-0.5 text-xs text-muted-foreground">
                {stats.count} {stats.count === 1 ? "reseña" : "reseñas"}
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <MiniStat
              icon={<Fire size={16} weight="fill" />}
              label="Dificultad"
              value={stats.avgDifficulty.toFixed(1)}
              color="hsl(var(--metric-difficulty))"
            />
            <MiniStat
              icon={<BookOpen size={16} weight="fill" />}
              label="Aprendes"
              value={stats.avgLearning.toFixed(1)}
              color="hsl(var(--metric-learning))"
            />
            <MiniStat
              icon={<ArrowClockwise size={16} weight="bold" />}
              label="Repetiría"
              value={`${stats.repeatPct}%`}
              color="hsl(var(--metric-repeat))"
            />
          </div>
        </>
      ) : (
        <div className="mt-4 flex flex-1 flex-col items-start justify-center rounded-xl bg-muted/50 p-4">
          <p className="text-sm font-medium">Sin reseñas aún</p>
          <p className="text-xs text-muted-foreground">Sé el primero en calificarlo.</p>
        </div>
      )}

      <span
        className={cn(
          "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary",
          "transition-transform group-hover:translate-x-0.5"
        )}
      >
        Ver perfil <ArrowRight size={15} weight="bold" />
      </span>
    </Link>
  );
}

export default CardTeachers;
