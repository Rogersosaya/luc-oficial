"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { PlusCircle, CheckCircle, SignIn } from "@phosphor-icons/react";

import { Button } from "@/components/ui/primitives/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/primitives/Dialog";
import ModalValorationBody from "./ModalValorationBody";
import { useValorationsStore } from "@/store/valorationsStore";
import { useValorationValuesStore } from "@/store/valorationValuesStore";

interface Props {
  teacherId: string;
  teacherName: string;
}

function ButtonAddValoration({ teacherId, teacherName }: Props) {
  const { data: session } = useSession();
  const { existValoration, getExistValoration, addValoration, updateExistValoration } =
    useValorationsStore();
  const { rating, difficulty, learning, repeat, tags } = useValorationValuesStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (session) getExistValoration(teacherId);
  }, [getExistValoration, teacherId, session]);

  if (!session) {
    return (
      <Button variant="primary" className="w-full" onClick={() => signIn("google")}>
        <SignIn weight="bold" />
        Inicia sesión para valorar
      </Button>
    );
  }

  if (existValoration) {
    return (
      <Button variant="secondary" className="w-full" disabled>
        <CheckCircle weight="fill" />
        Ya valoraste a este profe
      </Button>
    );
  }

  const submit = () => {
    updateExistValoration();
    addValoration(teacherId, rating, difficulty, learning, repeat, tags);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button className="w-full" onClick={() => setOpen(true)}>
        <PlusCircle weight="fill" />
        Agregar valoración
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Valorar a {teacherName}</DialogTitle>
          <DialogDescription>
            Tu valoración es anónima y ayuda a otros estudiantes a decidir.
          </DialogDescription>
        </DialogHeader>

        <ModalValorationBody />

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button onClick={submit}>Enviar valoración</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ButtonAddValoration;
