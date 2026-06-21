import { MagnifyingGlass, ChartBar, PencilSimpleLine } from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/container/Container";

const steps = [
  {
    icon: <MagnifyingGlass size={22} weight="bold" />,
    title: "Busca",
    body: "Encuentra a tu profesor por nombre, o filtra por facultad, carrera, ciclo y curso.",
  },
  {
    icon: <ChartBar size={22} weight="bold" />,
    title: "Compara",
    body: "Revisa su calificación general, dificultad, aprendizaje y cuántos lo volverían a llevar.",
  },
  {
    icon: <PencilSimpleLine size={22} weight="bold" />,
    title: "Reseña",
    body: "Comparte tu experiencia con respeto para ayudar a la siguiente generación de la UNI.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-border bg-surface py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Decisiones de matrícula con información, no suerte.
            </h2>
            <p className="mt-4 max-w-prose text-muted-foreground">
              Cátedra reúne la experiencia de cientos de estudiantes para que
              elijas con quién llevar cada curso.
            </p>
          </div>

          <ol className="flex flex-col">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-5 border-b border-border py-6 first:pt-0 last:border-0 last:pb-0"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  {step.icon}
                </span>
                <div>
                  <h3 className="flex items-baseline gap-2 text-lg font-semibold">
                    {step.title}
                    <span className="tabular text-sm font-normal text-muted-foreground">
                      0{i + 1}
                    </span>
                  </h3>
                  <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
