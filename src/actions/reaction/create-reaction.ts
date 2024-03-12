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
   
    const reactionExist = await prisma.reaction.findFirst({
      where: {
        commentId: commentId,
        userId: userCurrent?.id,
       
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
    if (!!reactionLikeExist && value === "like") return reactionLikeExist;
    if (!!reactionDislikeExist && value === "dislike") return reactionDislikeExist;

    if (!!reactionLikeExist && value === "dislike") {
      const newReaction = await prisma.reaction.update({
        where: {
          id: reactionExist?.id,
        },
        data: {
          value: "dislike",
        },
      });
      return newReaction;
    }
    if (!!reactionDislikeExist && value === "like") {
      const newReaction =await prisma.reaction.update({
        where: {
          id: reactionExist?.id,
        },
        data: {
          value: "like",
        },
      });
      return newReaction;
    }
   
    const newReaction = await prisma.reaction.create({
      data: {
        value: value,
        commentId: commentId,
        userId: userCurrent!.id,
      },
    });

    return newReaction;
  } catch (error) {
    console.log(error);
  }
};
