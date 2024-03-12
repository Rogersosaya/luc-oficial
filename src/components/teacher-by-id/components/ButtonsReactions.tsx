"use client";
import { createReaction } from "@/actions/reaction/create-reaction";
import { ValueReaction } from "@/interfaces/reaction.interface";
import { User } from "@/interfaces/user.interface";
import { useCommentStore } from "@/store/commentStore";
import { useReactionStore } from "@/store/reactionStore";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
interface PropsReaction {
  user: User;
  value: ValueReaction;
}
interface CommentProps {
  id: string;
  value: string;
  user: User;
  reactions: PropsReaction[];
}
interface Props {
  comment: CommentProps;
}
function ButtonsReactions({ comment }: Props) {
  const { data: session } = useSession();
  const countLikes = comment.reactions.filter(
    (item) => item.value === "like"
  ).length;
  const countDislikes = comment.reactions.filter(
    (item) => item.value === "dislike"
  ).length;

  const { updateReaction } = useCommentStore();

  return (
    <>
      <div className="flex gap-1 items-center">
       
        <Button
          className="text-xs font-bold"
          color="secondary"
          isDisabled={false}
          onClick={() =>
            updateReaction(comment.id, "like", session?.user?.email!)
          }
          variant="bordered"
          endContent={<AiOutlineLike size={15} />}
        >
          {countLikes}
        </Button>
        <Button
          className="text-xs font-bold"
          color="danger"
          isDisabled={false}
          onClick={() =>
            updateReaction(comment.id, "dislike", session?.user?.email!)
          }
          variant="bordered"
          endContent={<AiOutlineDislike size={15} />}
        >
          {countDislikes}
        </Button>
      </div>
    </>
  );
}

export default ButtonsReactions;
