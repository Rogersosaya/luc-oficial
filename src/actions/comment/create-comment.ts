'use server'
import prisma from "@/lib/prisma";

interface Props {
  value: string;
  teacher: string;
  userEmail: string;
}

export const createComment = async ({ teacher, userEmail, value }: Props) => {
  try {
    console.log("hola")
    const userCurrent = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });
    console.log(userCurrent);
    const newComment = await prisma.comment.create({
      data: {
        value: value,
        teacherId: teacher,
        userId: userCurrent!.id,
      },
    });

    console.log(newComment);
    return true;
  } catch (error) {
    return false;
  }
};
