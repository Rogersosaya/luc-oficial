"use client";
import Container from "@/components/container/Container";
import { Logo } from "@/components/icons/logo";
import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { Button } from "../button/Button";
import { HamburgerIcon } from "@/components/icons/hamburguer";
import { Avatar, Button } from "@nextui-org/react";

import { signIn, signOut, useSession } from "next-auth/react";
// import { logout } from "@/actions/auth/logout";

function NavBar() {
  const { data: session } = useSession();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);
  const pages = [
    {
      title: "Inicio",
      route: "/",
    },
    {
      title: "Profesores",
      route: "/teachers",
    },
    {
      title: "Sobre Nosotros",
      route: "/about",
    },
  ];

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px] bg-[#1b1a19]">
      <Container className="flex h-navigation-height">
        <Logo className="h-13" />
        <Link className="flex items-center text-md" href="/">
          LUC
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
          )}
        >
          <nav
            className={classNames(
              "z-50 fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classNames(
                "z-50 flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors ",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              {pages.map((page) => (
                <li key={page.title}>
                  <Link
                    onClick={() => setHamburgerMenuIsOpen(false)}
                    href={page.route}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="ml-auto flex h-full items-center">
          {loaded &&
            (session?.user ? (
              <div className="flex gap-5 items-center">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="hidden md:block text-small font-semibold leading-none text-default-600">
                    {session.user.name}
                  </h4>
                  <h5 className="hidden md:block text-small tracking-tight text-default-400">
                    {session.user.email}
                  </h5>
                </div>
                <Avatar
                  isBordered
                  radius="full"
                  size="sm"
                  src={session.user.image ?? "/teachers/icono.png"}
                />

                <Button
                  size="lg"
                  className=" font-bold "
                  onClick={() => {
                    signOut();
                  }}
                >
                  Cerrar Sesión
                </Button>
              </div>
            ) : (
              <div className="bg-gradient-to-r to-primary from-secondary rounded-xl p-[2px] ">
                <button
                  
                  className="  font-bold py-3 px-4 bg-[#1b1a19] rounded-xl"
                  onClick={() => signIn()}
                >
                  INICIAR SESIÓN
                </button>
              </div>
            ))}

          {/* <Link className="mr-6 text-sm" href="/auth/login">
            Iniciar sesión
          </Link>
          <Button href="/auth/new-account">Registrarse</Button> */}
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
}

export default NavBar;
