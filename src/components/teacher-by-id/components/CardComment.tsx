"use client";

import { useState } from "react";
import DropdownDetails from "./DropdownDetails";
import ButtonsReactions from "./ButtonsReactions";
import { User } from "@/interfaces/user.interface";
import { ValueReaction } from "@/interfaces/reaction.interface";
import { useCommentStore } from "@/store/commentStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/primitives/Avatar";
import { initials } from "@/lib/utils";
import { Textarea } from "@/components/ui/primitives/Field";
import { Button } from "@/components/ui/primitives/Button";

interface PropsReaction {
  user: User;
  value: ValueReaction;
}
interface CommentProps {
  id: string;
  value: string;
  occult: boolean;
  user: User;
  reactions: PropsReaction[];
  editEnabled?: boolean;
}

function CardComment({ comment }: { comment: CommentProps }) {
  const [draft, setDraft] = useState(comment.value);
  const { updateComment, editUnabledComment } = useCommentStore();
  const anon = comment.occult;

  const save = () => {
    if (draft.trim() === "") return;
    editUnabledComment(comment.id, false);
    updateComment(comment.id, draft.trim());
  };

  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            {!anon && comment.user?.image && (
              <AvatarImage src={comment.user.image} alt="" />
            )}
            <AvatarFallback>
              {anon ? "?" : initials(comment.user?.name)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-tight">
              {anon ? "Anónimo" : comment.user?.name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {anon ? "Estudiante de la UNI" : comment.user?.email}
            </p>
          </div>
        </div>
        <DropdownDetails comment={comment} />
      </header>

      <div className="mt-3">
        {comment.editEnabled ? (
          <div className="flex flex-col gap-2">
            <Textarea value={draft} onChange={(e) => setDraft(e.target.value)} />
            <div className="flex justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => editUnabledComment(comment.id, false)}
              >
                Cancelar
              </Button>
              <Button size="sm" onClick={save} disabled={draft.trim() === ""}>
                Guardar
              </Button>
            </div>
          </div>
        ) : (
          <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
            {comment.value}
          </p>
        )}
      </div>

      <footer className="mt-4">
        <ButtonsReactions comment={comment} />
      </footer>
    </article>
  );
}

export default CardComment;
