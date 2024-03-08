"use server";

import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

interface Props {
  commentId: string;
}

export const getReactionsByCommentAndUser = async ({ commentId }: Props) => {
  try {
    const session = await getServerSession();
    const userEmail = session?.user?.email;
    const userCurrent = await prisma.user.findUnique({
      where: {
        email: userEmail!,
      },
    });

    const reactions = await prisma.comment.findUnique({
      include: {
        user: true,
        reactions: true,
        _count: {
          select: {
            reactions: true,
          },
        },
        // _count:{
        //   select: {}
        // }
      },
      where: {
        id: commentId,
        user: {
            id: userCurrent?.id
        },
        reactions:{
            some: {
                value: "like"
            }
        }
      },
    });
    // console.log(reactions);
    return reactions;
  } catch (error) {
    // console.log(error);
    // return [];
  }
};
