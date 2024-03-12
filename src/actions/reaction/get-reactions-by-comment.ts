"use server";

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
    
  }
};
