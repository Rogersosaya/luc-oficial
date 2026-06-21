import Link from "next/link";
import { Trophy, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getTopTeachers, type TopTeacher } from "@/actions/teacher/get-top-teachers";
import Container from "@/components/container/Container";
import { StarRating } from "@/components/ui/primitives/StarRating";
import { cn, initials } from "@/lib/utils";

const rankStyles = [
  "text-[hsl(var(--metric-rating))]",
  "text-muted-foreground",
  "text-[hsl(var(--metric-difficulty))]",
];

function PodiumCard({ teacher, rank }: { teacher: TopTeacher; rank: number }) {
  const featured = rank === 0;
  return (
    <Link
      href={`/teacher/${teacher.slug}`}
      className={cn(
        "group relative flex flex-col items-center rounded-2xl border bg-card p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        featured ? "border-primary/40 shadow-md sm:-mt-4 sm:pb-8" : "border-border"
      )}
    >
      <div className="absolute left-4 top-4 flex items-center gap-1">
        <Trophy size={18} weight="fill" className={rankStyles[rank]} />
        <span className="text-sm font-bold tabular text-muted-foreground">#{rank + 1}</span>
      </div>

      <span
        aria-hidden
        className={cn(
          "mt-2 flex items-center justify-center rounded-2xl bg-primary-soft font-display font-bold text-primary",
          featured ? "size-20 text-2xl" : "size-16 text-xl"
        )}
      >
        {initials(teacher.name)}
      </span>

      <h3 className="mt-4 line-clamp-2 font-semibold leading-snug">{teacher.name}</h3>

      <div className="mt-3 flex items-center gap-2">
        <span className="font-display text-xl font-bold tabular">
          {teacher.stats.avgRating.toFixed(1)}
        </span>
        <StarRating value={teacher.stats.avgRating} size={15} />
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        {teacher.stats.count} valoraciones
      </p>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5">
        Ver perfil <ArrowRight size={14} weight="bold" />
      </span>
    </Link>
  );
}

async function Podium() {
  const topTeachers = await getTopTeachers(3);
  if (topTeachers.length === 0) return null;

  // Visual podium order: 2nd, 1st, 3rd on desktop; natural order on mobile.
  const desktopOrder = [topTeachers[1], topTeachers[0], topTeachers[2]].filter(Boolean);
  const rankOf = (t: TopTeacher) => topTeachers.findIndex((x) => x.slug === t.slug);

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Los mejores valorados
          </h2>
          <p className="mt-3 text-muted-foreground">
            Profesores con la calificación general más alta entre quienes superan
            las 7 valoraciones.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-4 sm:grid-cols-3">
          {desktopOrder.map((teacher) => (
            <PodiumCard key={teacher.slug} teacher={teacher} rank={rankOf(teacher)} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Podium;
