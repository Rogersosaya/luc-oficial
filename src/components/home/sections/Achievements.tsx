import { Users, ChatCircleText, Star, ChalkboardTeacher } from "@phosphor-icons/react/dist/ssr";
import { CountUp } from "@/components/ui/primitives/CountUp";

interface Props {
  teachersTotal: number;
  commentsTotal: number;
  valorationsTotal: number;
  usersTotal: number;
}

const Achievements = ({
  teachersTotal,
  commentsTotal,
  valorationsTotal,
  usersTotal,
}: Props) => {
  const items = [
    { icon: <ChalkboardTeacher size={22} weight="fill" />, label: "Profesores", value: teachersTotal },
    { icon: <Star size={22} weight="fill" />, label: "Valoraciones", value: valorationsTotal },
    { icon: <ChatCircleText size={22} weight="fill" />, label: "Reseñas", value: commentsTotal },
    { icon: <Users size={22} weight="fill" />, label: "Estudiantes", value: usersTotal },
  ];

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-content grid-cols-2 divide-x divide-y divide-border border-x border-border sm:grid-cols-4 sm:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1.5 px-4 py-10">
            <span className="text-primary">{item.icon}</span>
            <span className="font-display text-3xl font-bold tabular sm:text-4xl">
              <CountUp value={item.value} />
            </span>
            <span className="text-sm text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
