import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import CardTeachers, { type TeacherCardData } from "@/components/ui/CardTeachers";

function ListTeachers({ teachers }: { teachers: TeacherCardData[] }) {
  if (!teachers || teachers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <MagnifyingGlass size={22} />
        </span>
        <h3 className="mt-4 text-lg font-semibold">Sin resultados</h3>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          No encontramos profesores con esos filtros. Prueba con otra búsqueda o
          limpia los filtros.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {teachers.map((teacher) => (
        <CardTeachers key={teacher.slug} teacher={teacher} />
      ))}
    </div>
  );
}

export default ListTeachers;
