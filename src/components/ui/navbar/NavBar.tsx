"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { List, X, SignOut, User } from "@phosphor-icons/react";

import Container from "@/components/container/Container";
import { Brand } from "@/components/ui/Brand";
import { Button } from "@/components/ui/primitives/Button";
import { ThemeToggle } from "@/components/ui/primitives/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/primitives/Avatar";
import { initials } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/primitives/DropdownMenu";
import { cn } from "@/lib/utils";

const pages = [
  { title: "Inicio", route: "/" },
  { title: "Profesores", route: "/teachers" },
  { title: "Nosotros", route: "/about" },
];

function NavBar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
  }, [open]);

  const isActive = (route: string) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <Container className="flex h-navigation-height items-center gap-4">
        <Brand />

        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {pages.map((page) => (
            <Link
              key={page.route}
              href={page.route}
              aria-current={isActive(page.route) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(page.route)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {page.title}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />

          {status === "authenticated" && session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Menú de cuenta"
                >
                  <Avatar className="size-9 ring-1 ring-border">
                    {session.user.image && (
                      <AvatarImage src={session.user.image} alt={session.user.name ?? ""} />
                    )}
                    <AvatarFallback>{initials(session.user.name)}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60">
                <div className="px-2.5 py-2">
                  <p className="truncate text-sm font-semibold">{session.user.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {session.user.email}
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem destructive onSelect={() => signOut()}>
                  <SignOut />
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => signIn("google")}
            >
              <User weight="bold" />
              Iniciar sesión
            </Button>
          )}

          <button
            className="inline-flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile panel */}
      <div
        className={cn(
          "md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-1 border-t border-border py-4">
          {pages.map((page) => (
            <Link
              key={page.route}
              href={page.route}
              onClick={() => setOpen(false)}
              aria-current={isActive(page.route) ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                isActive(page.route)
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {page.title}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-2">
            <ThemeToggle />
            {status !== "authenticated" && (
              <Button className="flex-1" onClick={() => signIn("google")}>
                <User weight="bold" />
                Iniciar sesión
              </Button>
            )}
          </div>
        </Container>
      </div>
    </header>
  );
}

export default NavBar;
