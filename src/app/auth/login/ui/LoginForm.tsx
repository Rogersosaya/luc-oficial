"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

// import { authenticate } from "@/actions";
import { IoInformationOutline } from "react-icons/io5";
import clsx from "clsx";

import { authenticate } from "@/actions/auth/login";
// import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  // const router = useRouter();
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  console.log({ errorMessage });
  //   console.log(state);

  //   useEffect(() => {
  //     if ( state === 'Success' ) {

  //       window.location.replace('/');
  //     }

  //   },[state]);

  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border  rounded mb-5"
        type="email"
        name="email"
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border  rounded mb-5"
        type="password"
        name="password"
      />

      {/* <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === "CredentialsSignin" && (
          <div className="flex flex-row mb-2">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">
              Credenciales no son correctas
            </p>
          </div>
        )}
      </div> */}

      <LoginButton />
      {/* <button type="submit" className="btn-primary">
        Ingresar
      </button> */}

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">Credenciales incorrectas</p>
          </>
        )}
      </div>
      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx({
        "bg-blue-500": !pending,
        "bg-gray-500": pending,
      })}
      disabled={pending}
    >
      Ingresar
    </button>
  );
}
