import Link from "next/link";
import { Button } from "@/components/ui/primitives/Button";
import { Brand } from "@/components/ui/Brand";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-surface px-6 text-center">
      <Brand />
      <p className="mt-10 font-mono text-sm font-medium text-primary">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        No encontramos esta página
      </h1>
      <p className="mt-3 max-w-prose text-muted-foreground">
        El enlace puede estar roto o el profesor que buscas ya no existe. Vuelve
        al inicio o explora la lista de profesores.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/teachers">Ver profesores</Link>
        </Button>
      </div>
    </main>
  );
}
