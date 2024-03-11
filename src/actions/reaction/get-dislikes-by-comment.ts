"use server";

import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

interface Props {
  commentId: string;
}

export const getDislikesByComment = async ({ commentId }: Props) => {
  try {
   
    const dislikes = await prisma.reaction.findMany({
      where:{
        value: "dislike",
        commentId: commentId
      }
    });
    

    // const reactionsLike = await prisma.comment.findUnique({
    //   include: {
    //     user: true,
    //     reactions: {
    //       where: {
    //         value: "like",
    //       },
    //     },

    //     _count: {
    //       select: {
    //         reactions: {
    //           where: {
    //             value: "like",
    //           },
    //         },
    //       },
    //     },
    //     // _count:{
    //     //   select: {}
    //     // }
    //   },
    //   where: {
    //     id: commentId,
    //   },
    // });
    return dislikes;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener profesor por slug");
  }
};
