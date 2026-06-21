import prisma from "@/lib/prisma";

export interface TeacherStats {
  avgRating: number;
  avgDifficulty: number;
  avgLearning: number;
  /** Percentage (0-100) of valorations where the student would retake. */
  repeatPct: number;
  count: number;
}

export const EMPTY_STATS: TeacherStats = {
  avgRating: 0,
  avgDifficulty: 0,
  avgLearning: 0,
  repeatPct: 0,
  count: 0,
};

const round1 = (n: number | null) => (n == null ? 0 : Number(n.toFixed(1)));

/**
 * Aggregates valoration metrics for a set of teachers using DB-side groupBy
 * (no over-fetching of individual valoration rows). Returns a map keyed by
 * teacherId; teachers with no valorations are absent (callers fall back to
 * EMPTY_STATS).
 */
export async function getTeacherStats(
  teacherIds: string[]
): Promise<Record<string, TeacherStats>> {
  if (teacherIds.length === 0) return {};

  const [agg, repeats] = await Promise.all([
    prisma.valoration.groupBy({
      by: ["teacherId"],
      where: { teacherId: { in: teacherIds } },
      _avg: { rating: true, difficulty: true, learning: true },
      _count: { _all: true },
    }),
    prisma.valoration.groupBy({
      by: ["teacherId"],
      where: { teacherId: { in: teacherIds }, repeat: true },
      _count: { _all: true },
    }),
  ]);

  const repeatMap = new Map(repeats.map((r) => [r.teacherId, r._count._all]));

  const result: Record<string, TeacherStats> = {};
  for (const row of agg) {
    const count = row._count._all;
    const repeatCount = repeatMap.get(row.teacherId) ?? 0;
    result[row.teacherId] = {
      avgRating: round1(row._avg.rating),
      avgDifficulty: round1(row._avg.difficulty),
      avgLearning: round1(row._avg.learning),
      repeatPct: count > 0 ? Math.round((repeatCount / count) * 100) : 0,
      count,
    };
  }
  return result;
}

/** Stats for a single teacher with a guaranteed value. */
export async function getStatsForTeacher(teacherId: string): Promise<TeacherStats> {
  const map = await getTeacherStats([teacherId]);
  return map[teacherId] ?? EMPTY_STATS;
}
