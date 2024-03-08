'use server'
import prisma from "@/lib/prisma";

interface Props {
  commentId: string;
}

export const deleteComment = async ({ commentId }: Props) => {
  try {
    // const session = await getServerSession();
    // const userEmail = session?.user?.email;
    // const userCurrent = await prisma.user.findUnique({
    //   where: {
    //     email: userEmail!,
    //   },
    // });
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
