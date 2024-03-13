'use server'
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
interface Props{
  commentId: string;
  value:string
}

export const updateCommentByValue = async ({commentId, value}:Props) => {
  try {
    const commentUpdate= await prisma.comment.update({
      where:{
          id: commentId,
      },
      data: {
        value:value
      }
    
  });
  revalidatePath('/')

  return commentUpdate;
   
  } catch (error) {
    console.log(error);
    return false;
    // return [];
  }
};
