"use client";

import { useSession, signIn } from "next-auth/react";
import { ThumbsUp, ThumbsDown } from "@phosphor-icons/react";
import { ValueReaction } from "@/interfaces/reaction.interface";
import { User } from "@/interfaces/user.interface";
import { useCommentStore } from "@/store/commentStore";
import { cn } from "@/lib/utils";

interface PropsReaction {
  user: User;
  value: ValueReaction;
}
interface CommentProps {
  id: string;
  reactions: PropsReaction[];
}

function ButtonsReactions({ comment }: { comment: CommentProps }) {
  const { data: session } = useSession();
  const { updateReaction } = useCommentStore();

  const likes = comment.reactions.filter((r) => r.value === "like").length;
  const dislikes = comment.reactions.filter((r) => r.value === "dislike").length;
  const mine = comment.reactions.find((r) => r.user.email === session?.user?.email);

  const react = (value: ValueReaction) => {
    if (!session) return signIn("google");
    updateReaction(comment.id, value, session.user!.email!);
  };

  const base =
    "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium tabular transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => react("like")}
        aria-label="De acuerdo"
        aria-pressed={mine?.value === "like"}
        className={cn(
          base,
          mine?.value === "like"
            ? "border-primary/40 bg-primary-soft text-primary"
            : "border-border text-muted-foreground hover:bg-muted"
        )}
      >
        <ThumbsUp size={16} weight={mine?.value === "like" ? "fill" : "regular"} />
        {likes}
      </button>
      <button
        type="button"
        onClick={() => react("dislike")}
        aria-label="En desacuerdo"
        aria-pressed={mine?.value === "dislike"}
        className={cn(
          base,
          mine?.value === "dislike"
            ? "border-destructive/40 bg-destructive/10 text-destructive"
            : "border-border text-muted-foreground hover:bg-muted"
        )}
      >
        <ThumbsDown size={16} weight={mine?.value === "dislike" ? "fill" : "regular"} />
        {dislikes}
      </button>
    </div>
  );
}

export default ButtonsReactions;
