"use server";

import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

interface Props {
  teacher: string;
}

export const getCommentsByTeacher = async ({ teacher }: Props) => {
  try {
    const session = await getServerSession();
    const userEmail = session?.user?.email;
    const userCurrent = await prisma.user.findUnique({
      where: {
        email: userEmail!,
      },
    });

    const comments = await prisma.comment.findMany({
      orderBy: [
        {
          assignedAt: "desc",
        },
      ],
      include: {
        user: true,
        reactions: {
          include: {
            user: true,
          },
        },
      },
      where: {
        teacherId: teacher,
      },
    });
    // console.log(comments[0].reactions);
    return comments;
  } catch (error) {
    console.log(error);
    return [];
  }
};
