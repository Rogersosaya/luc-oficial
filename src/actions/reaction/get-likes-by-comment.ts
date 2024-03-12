"use server";

import prisma from "../../lib/prisma";

interface Props {
  commentId: string;
}

export const getLikesByComment = async ({ commentId }: Props) => {
  try {
    
    const likes = await prisma.reaction.findMany({
      
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
