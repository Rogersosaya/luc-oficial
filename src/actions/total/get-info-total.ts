"use server";
import prisma from "../../lib/prisma";
import { unstable_cache } from "next/cache";

const getTotalCached = unstable_cache(
  async () => {
    const [teachersTotal, commentsTotal, valorationsTotal, usersTotal] =
      await prisma.$transaction([
        prisma.teacher.count(),
        prisma.comment.count(),
        prisma.valoration.count(),
        prisma.user.count(),
      ]);
    return { teachersTotal, commentsTotal, valorationsTotal, usersTotal };
  },
  ["info-total"],
  { revalidate: 300, tags: ["totals"] }
);

export const getTotal = async () => {
  try {
    return await getTotalCached();
  } catch (error) {
    console.log(error);
    return {
      teachersTotal: 0,
      commentsTotal: 0,
      valorationsTotal: 0,
      usersTotal: 0,
    };
  }
};
