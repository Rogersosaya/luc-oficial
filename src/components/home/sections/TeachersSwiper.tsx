import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import CardTeachers, { type TeacherCardData } from "@/components/ui/CardTeachers";
import Container from "@/components/container/Container";
import { Button } from "@/components/ui/primitives/Button";

function TeachersSwiper({ teachers }: { teachers: TeacherCardData[] }) {
  return (
    <section className="border-t border-border bg-surface py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Explora profesores
            </h2>
            <p className="mt-3 text-muted-foreground">
              Filtra por facultad, carrera, ciclo y curso para encontrar al
              indicado para tu próximo semestre.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 self-start sm:self-auto">
            <Link href="/teachers">
              Ver todos <ArrowRight size={16} weight="bold" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.slice(0, 8).map((teacher) => (
            <CardTeachers key={teacher.slug} teacher={teacher} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TeachersSwiper;
