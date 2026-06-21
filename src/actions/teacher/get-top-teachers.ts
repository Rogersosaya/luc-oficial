"use server";
import prisma from "../../lib/prisma";
import { getTeacherStats, EMPTY_STATS, type TeacherStats } from "./get-teacher-stats";

export interface TopTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
  stats: TeacherStats;
}

const MIN_VALORATIONS = 7;

/**
 * Top teachers by average rating, ranked entirely in the database.
 * Only considers teachers with more than MIN_VALORATIONS valorations.
 */
export const getTopTeachers = async (limit = 3): Promise<TopTeacher[]> => {
  try {
    const ranked = await prisma.valoration.groupBy({
      by: ["teacherId"],
      _avg: { rating: true },
      having: { rating: { _count: { gt: MIN_VALORATIONS } } },
      orderBy: { _avg: { rating: "desc" } },
      take: limit,
    });

    const ids = ranked.map((r) => r.teacherId);
    if (ids.length === 0) return [];

    const [teachers, stats] = await Promise.all([
      prisma.teacher.findMany({
        where: { id: { in: ids } },
        select: { id: true, name: true, slug: true, url: true },
      }),
      getTeacherStats(ids),
    ]);

    const teacherMap = new Map(teachers.map((t) => [t.id, t]));

    // Preserve the DB ranking order.
    return ids
      .map((id) => {
        const t = teacherMap.get(id);
        if (!t) return null;
        return { ...t, stats: stats[id] ?? EMPTY_STATS };
      })
      .filter((t): t is TopTeacher => t !== null);
  } catch (error) {
    console.log(error);
    return [];
  }
};
