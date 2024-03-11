"use server";

import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

interface Props {
  teacher: string;
}

export const getCommentsByTeacher = async ({ teacher }: Props) => {
  try {
   

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
    return comments;
  } catch (error) {
    console.log(error);
    return [];
  }
};
