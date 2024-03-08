"use server";

import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

interface Props {
  commentId: string;
}

export const getLikesByComment = async ({ commentId }: Props) => {
  try {
    // const session = await getServerSession();
    // const userEmail = session?.user?.email;
    // const userCurrent = await prisma.user.findUnique({
    //   where: {
    //     email: userEmail!,
    //   },
    // });
    // console.log(commentId)
    const likes = await prisma.reaction.findMany({
      // include:{
      //   user:true
      // },
      where:{
        value: "like",
        commentId: commentId
      }
    });

    
    return likes;
  } catch (error) {
    // console.log(error);
    // return [];
  }
};
