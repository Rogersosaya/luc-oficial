"use server";
import { ValueReaction } from "@/interfaces/reaction.interface";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

interface Props {
  value: ValueReaction;
  commentId: string;
}

export const createReaction = async ({ commentId, value }: Props) => {
  try {
    const session = await getServerSession();
    const userEmail = session?.user?.email;
    const userCurrent = await prisma.user.findUnique({
      where: {
        email: userEmail!,
      },
    });
    // confirmar su ya se reacciono a este comentario de parte del un usuario
    const reactionExist = await prisma.reaction.findFirst({
      where: {
        commentId: commentId,
        userId: userCurrent?.id,
        // reactions: {
        //   some:{
        //     value: "like"
        //   }
        // }
      },
    });
    const reactionLikeExist = await prisma.reaction.findFirst({
      where: {
        commentId: commentId,
        userId: userCurrent?.id,
        value: "like",
      },
    });
    const reactionDislikeExist = await prisma.reaction.findFirst({
      where: {
        commentId: commentId,
        userId: userCurrent?.id,
        value: "dislike",
      },
    });
    // if(!!reactionExist) return false
    if (!!reactionLikeExist && value === "like") return false;
    if (!!reactionDislikeExist && value === "dislike") return false;

    if (!!reactionLikeExist && value === "dislike") {
      await prisma.reaction.update({
        where: {
          id: reactionExist?.id,
        },
        data: {
          value: "dislike",
        },
      });
      return true;
    }
    if (!!reactionDislikeExist && value === "like") {
      await prisma.reaction.update({
        where: {
          id: reactionExist?.id,
        },
        data: {
          value: "like",
        },
      });
      return true;
    }
   
    const newReaction = await prisma.reaction.create({
      data: {
        value: value,
        commentId: commentId,
        userId: userCurrent!.id,
      },
    });

    // console.log(reactionExist);
    return true;
  } catch (error) {
    return false;
  }
};
