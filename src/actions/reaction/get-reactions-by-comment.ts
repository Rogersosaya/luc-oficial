"use server";

import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

interface Props {
  commentId: string;
}

export const getReactionsByComment = async ({ commentId }: Props) => {
  try {
    // const session = await getServerSession();
    // const userEmail = session?.user?.email;
    // const userCurrent = await prisma.user.findUnique({
    //   where: {
    //     email: userEmail!,
    //   },
    // });
    const reactions = await prisma.reaction.findMany({
      include: {
        user: true,
      },
      where: {
        commentId: commentId,
      },
    });

    // console.log(reactions);

    return reactions;
  } catch (error) {
    // console.log(error);
    // return [];
  }
};
