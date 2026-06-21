import Image from "next/image";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/container/Container";
import { getCommentsRecent } from "@/actions/comment/get-comments-recent";
import { initials } from "@/lib/utils";

type RecentComment = Awaited<ReturnType<typeof getCommentsRecent>>[number];

function CommentCard({ comment }: { comment: RecentComment }) {
  const anon = comment.occult;
  const teacherName = comment.teacher?.name ?? "Profesor";
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col gap-3 rounded-2xl border border-border bg-card p-5">
      <Quotes size={20} weight="fill" className="text-primary/30" />
      <blockquote className="line-clamp-3 text-sm leading-relaxed text-foreground">
        {comment.value}
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-2.5 pt-1">
        {!anon && comment.user?.image ? (
          <Image
            src={comment.user.image}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full object-cover"
          />
        ) : (
          <span className="flex size-7 items-center justify-center rounded-full bg-muted text-[0.65rem] font-semibold text-muted-foreground">
            {anon ? "?" : initials(teacherName)}
          </span>
        )}
        <span className="text-xs text-muted-foreground">
          {anon ? "Anónimo" : "Estudiante"} · sobre{" "}
          <span className="font-medium text-foreground">{teacherName}</span>
        </span>
      </figcaption>
    </figure>
  );
}

async function CommentsFast() {
  const comments = await getCommentsRecent();
  if (comments.length === 0) return null;

  // Duplicate the list so the marquee loops seamlessly (-50% keyframe).
  const track = [...comments, ...comments];

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Lo que dicen los estudiantes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reseñas recientes escritas por alumnos que ya pasaron por el aula.
          </p>
        </div>
      </Container>

      <div className="group relative mt-12 overflow-hidden mask-fade-x">
        <div
          className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ ["--marquee-duration" as string]: "60s" }}
        >
          {track.map((comment, i) => (
            <CommentCard key={`${comment.id}-${i}`} comment={comment} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommentsFast;
