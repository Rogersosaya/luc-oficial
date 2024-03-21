'use server'
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface Props {
  commentId: string;
}

export const deleteComment = async ({ commentId }: Props) => {
  try {

    await prisma.reaction.deleteMany({
      where: {
        commentId: commentId
      }  
    }
    )

    const commentDelete= await prisma.comment.delete({
        where:{
            id: commentId,
        }
      
    });
    revalidatePath('/')
    return commentDelete;
  } catch (error) {
    return false;
  }
};
