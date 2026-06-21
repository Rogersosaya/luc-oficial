import { UsersThree } from "@phosphor-icons/react/dist/ssr";
import CardTeachers, { type TeacherCardData } from "@/components/ui/CardTeachers";

function Others({ teachers }: { teachers: TeacherCardData[] }) {
  if (teachers.length === 0) return null;

  return (
    <div className="lg:sticky lg:top-24">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <UsersThree size={20} weight="fill" className="text-primary" />
        Otros profesores
      </h2>
      <div className="flex flex-col gap-4">
        {teachers.map((teacher) => (
          <CardTeachers key={teacher.slug} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}

export default Others;
