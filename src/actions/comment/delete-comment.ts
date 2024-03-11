'use server'
import prisma from "@/lib/prisma";

interface Props {
  commentId: string;
}

export const deleteComment = async ({ commentId }: Props) => {
  try {
    
    const commentDelete= await prisma.comment.delete({
        where:{
            id: commentId,
        }
      
    });
    return commentDelete;
  } catch (error) {
    return false;
  }
};
