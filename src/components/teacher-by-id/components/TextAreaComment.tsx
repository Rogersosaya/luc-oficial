"use client";

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { EyeSlash, PaperPlaneTilt } from "@phosphor-icons/react";

import { useCommentStore } from "@/store/commentStore";
import { useTeacherStore } from "@/store/teacherStore";
import { Textarea } from "@/components/ui/primitives/Field";
import { Button } from "@/components/ui/primitives/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/primitives/Avatar";
import { cn, initials } from "@/lib/utils";

function TextAreaComment() {
  const { addComment } = useCommentStore();
  const { teacherId } = useTeacherStore();
  const { data: session } = useSession();

  const [value, setValue] = useState("");
  const [occult, setOccult] = useState(false);

  const disabled = value.trim() === "";

  const send = () => {
    if (disabled) return;
    addComment(teacherId, value.trim(), occult);
    setValue("");
    setOccult(false);
  };

  if (!session) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Inicia sesión con tu correo @uni.pe para dejar una reseña.
        </p>
        <Button onClick={() => signIn("google")}>Iniciar sesión</Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex gap-3">
        <Avatar className="mt-1 size-9 shrink-0">
          {!occult && session.user?.image && (
            <AvatarImage src={session.user.image} alt="" />
          )}
          <AvatarFallback>{occult ? "?" : initials(session.user?.name)}</AvatarFallback>
        </Avatar>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Comparte cómo fue llevar clases con este profesor…"
          aria-label="Escribe tu reseña"
          className="min-h-[88px]"
        />
      </div>

      {occult && (
        <p className="mt-2 pl-12 text-xs text-muted-foreground">
          Tu identidad queda protegida. Úsalo de forma respetuosa y constructiva.
        </p>
      )}

      <div className="mt-3 flex items-center justify-between pl-12">
        <button
          type="button"
          onClick={() => setOccult((o) => !o)}
          aria-pressed={occult}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
            occult
              ? "border-primary/40 bg-primary-soft text-primary"
              : "border-border text-muted-foreground hover:bg-muted"
          )}
        >
          <EyeSlash size={16} weight={occult ? "fill" : "regular"} />
          Anónimo
        </button>

        <div className="flex items-center gap-2">
          {value && (
            <Button variant="ghost" onClick={() => setValue("")}>
              Cancelar
            </Button>
          )}
          <Button onClick={send} disabled={disabled}>
            <PaperPlaneTilt weight="fill" />
            Publicar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TextAreaComment;
