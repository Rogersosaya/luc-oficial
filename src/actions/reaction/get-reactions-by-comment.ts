"use server";

import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

interface Props {
  commentId: string;
}

export const getReactionsByComment = async ({ commentId }: Props) => {
  try {
    
    const reactions = await prisma.reaction.findMany({
      include: {
        user: true,
      },
      where: {
        commentId: commentId,
      },
    });


    return reactions;
  } catch (error) {
    // console.log(error);
    // return [];
  }
};
