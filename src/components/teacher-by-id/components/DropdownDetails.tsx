"use client";

import { useSession } from "next-auth/react";
import { DotsThree, PencilSimple, Trash } from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/primitives/DropdownMenu";
import { useCommentStore } from "@/store/commentStore";
import { User } from "@/interfaces/user.interface";

interface CommentProps {
  id: string;
  user: User;
}

function DropdownDetails({ comment }: { comment: CommentProps }) {
  const { data: session } = useSession();
  const { deleteComment, editUnabledComment } = useCommentStore();

  const isOwner = comment.user.email === session?.user?.email;
  if (!isOwner) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Opciones de la reseña"
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <DotsThree size={20} weight="bold" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => editUnabledComment(comment.id, true)}>
          <PencilSimple />
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem destructive onSelect={() => deleteComment(comment.id)}>
          <Trash />
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownDetails;
