import Link from "next/link";
import Container from "@/components/container/Container";
import { Brand } from "@/components/ui/Brand";

const socials = [
  { title: "Facebook", href: "https://www.facebook.com/TeamLUC1/" },
  { title: "TikTok", href: "https://www.tiktok.com/@luc.oficial" },
  { title: "Instagram", href: "https://www.instagram.com/teamluc_123/" },
  { title: "YouTube", href: "https://www.youtube.com/@LUC12321_" },
];

const product = [
  { title: "Inicio", href: "/" },
  { title: "Profesores", href: "/teachers" },
  { title: "Nosotros", href: "/about" },
];

export const Footer = () => (
  <footer className="mt-24 border-t border-border bg-surface">
    <Container className="py-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-prose">
          <Brand />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Reseñas reales de estudiantes sobre profesores de la Universidad
            Nacional de Ingeniería. Elige mejor tus cursos cada ciclo.
          </p>
        </div>

        <nav aria-label="Producto">
          <h3 className="text-sm font-semibold">Producto</h3>
          <ul className="mt-4 space-y-2.5">
            {product.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Redes sociales">
          <h3 className="text-sm font-semibold">Comunidad</h3>
          <ul className="mt-4 space-y-2.5">
            {socials.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Cátedra. Hecho por estudiantes, para estudiantes.</p>
        <p>No afiliado oficialmente a la UNI.</p>
      </div>
    </Container>
  </footer>
);
