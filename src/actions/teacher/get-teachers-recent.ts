"use server";
import prisma from "../../lib/prisma";
import { getTeacherStats, EMPTY_STATS, type TeacherStats } from "./get-teacher-stats";

export interface RecentTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
  courses: { name: string }[];
  stats: TeacherStats;
}

export const getTeachersRecent = async (take = 12): Promise<RecentTeacher[]> => {
  try {
    const teachers = await prisma.teacher.findMany({
      take,
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        slug: true,
        url: true,
        courses: { select: { course: { select: { name: true } } } },
      },
    });

    const stats = await getTeacherStats(teachers.map((t) => t.id));

    return teachers.map((t) => ({
      id: t.id,
      name: t.name,
      slug: t.slug,
      url: t.url,
      courses: t.courses.map((c) => ({ name: c.course.name })),
      stats: stats[t.id] ?? EMPTY_STATS,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};
