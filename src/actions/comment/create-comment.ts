'use server'
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

interface Props {
  value: string;
  teacher: string;
  occult:boolean;
}

export const createComment = async ({ teacher,  value, occult }: Props) => {
  try {
    const session = await getServerSession();
    const userEmail = session?.user?.email;
    const userCurrent = await prisma.user.findUnique({
      where: {
        email: userEmail!,
      },
    });
    const newComment = await prisma.comment.create({
      data: {
        value: value,
        occult:occult,
        teacherId: teacher,
        userId: userCurrent!.id,
      },
    });
    const newCommentData = await prisma.comment.findUnique({
      include: {
        user: true,
        reactions: {
          include: {
            user: true
          }
        },
      },
      where:{
        id: newComment.id,
      }
    })
    return newCommentData;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener producto por slug');
  }
};
