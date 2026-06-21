"use server";

import prisma from "../../lib/prisma";

interface Props {
  teacher: string;
  page?: number;
  take?: number;
}

/**
 * Paginated comments for a teacher (most recent first). Bounded by `take`
 * to avoid unbounded fetches on popular teachers.
 */
export const getCommentsByTeacher = async ({
  teacher,
  page = 1,
  take = 20,
}: Props) => {
  if (isNaN(Number(page)) || page < 1) page = 1;
  try {
    const comments = await prisma.comment.findMany({
      where: { teacherId: teacher },
      orderBy: { assignedAt: "desc" },
      take,
      skip: (page - 1) * take,
      include: {
        user: true,
        reactions: { include: { user: true } },
      },
    });
    return comments;
  } catch (error) {
    console.log(error);
    return [];
  }
};
