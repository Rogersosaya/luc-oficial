import type { Metadata } from "next";
import { GithubLogo, ArrowUpRight, Heart, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/container/Container";
import { Badge } from "@/components/ui/primitives/Badge";
import { Button } from "@/components/ui/primitives/Button";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Cátedra es un proyecto para centralizar las opiniones de estudiantes de la UNI sobre sus profesores.",
};

const team = [
  "bob", "leolin", "yucra", "jordex14", "kazuo", "edward",
  "césar", "tuki", "elias", "joel", "ydenek", "this_is_AM", "luis",
];

const collaborators = [
  { name: "Stefano Ramirez", role: "Diseño original en Figma" },
  { name: "Hermano del autor", role: "Logo y su animación" },
  { name: "Tú", role: "Reseñas y valoraciones que ayudan a la comunidad" },
];

const notes = [
  "Solo puedes iniciar sesión con tu correo institucional @uni.pe.",
  "Comenta siempre con respeto: las reseñas ayudan a decidir, no a atacar.",
  "Si no llevaste clases con un profesor, evita valorarlo.",
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16">
          <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Decisiones de matrícula más justas para la UNI.
          </h1>
          <p className="mt-5 max-w-prose text-lg text-muted-foreground">
            Cátedra centraliza las opiniones de estudiantes sobre sus profesores,
            para que cualquiera pueda revisar referencias antes de matricularse en
            un curso.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <section>
              <h2 className="text-xl font-semibold">Por qué existe</h2>
              <div className="mt-4 flex max-w-prose flex-col gap-3 text-muted-foreground">
                <p>
                  Elegir profesor a ciegas cada ciclo es una de las decisiones más
                  frustrantes de la vida universitaria. Reunimos la experiencia de
                  cientos de estudiantes para que esa decisión deje de ser una
                  apuesta.
                </p>
                {/* <p>
                  LUC es el nombre de nuestro grupo de amigos. Lo usamos como sello
                  porque planeamos construir más proyectos para la comunidad UNI, y
                  Cátedra es el primero.
                </p> */}
              </div>
            </section>

            {/* <section>
              <h2 className="text-xl font-semibold">El equipo</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {team.map((member) => (
                  <Badge key={member} variant="neutral">
                    {member}
                  </Badge>
                ))}
              </div>
            </section> */}

            {/* <section>
              <h2 className="text-xl font-semibold">Colaboradores</h2>
              <ul className="mt-4 divide-y divide-border rounded-2xl border border-border">
                {collaborators.map((c) => (
                  <li key={c.name} className="flex items-center gap-3 p-4">
                    <Heart size={18} weight="fill" className="shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{c.name}</p>
                      <p className="text-sm text-muted-foreground">{c.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section> */}
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-base font-semibold">Antes de empezar</h2>
              <ul className="mt-3 flex flex-col gap-3">
                {notes.map((note) => (
                  <li key={note} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="rounded-2xl border border-border bg-card p-6">
              <GithubLogo size={24} weight="fill" />
              <h2 className="mt-3 text-base font-semibold">Código abierto</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Todo el proyecto es público. Revisa el código o propón mejoras.
              </p>
              <Button asChild variant="outline" className="mt-4 w-full">
                <a
                  href="https://github.com/Rogersosaya/luc-oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en GitHub <ArrowUpRight size={16} weight="bold" />
                </a>
              </Button>
            </div> */}

            <div className="rounded-2xl border border-border bg-card p-6">
              <EnvelopeSimple size={24} weight="fill" />
              <h2 className="mt-3 text-base font-semibold">¿Una idea?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Escríbenos por nuestras redes si quieres proponer mejoras o
                sumarte a un próximo proyecto.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}

export default AboutPage;
