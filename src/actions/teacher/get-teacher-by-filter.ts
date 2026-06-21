"use server";

import type { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { getTeacherStats, EMPTY_STATS, type TeacherStats } from "./get-teacher-stats";

interface Props {
  page?: number;
  take?: number;
  faculty?: string;
  career?: string;
  cycle?: string;
  course?: string;
  search: string;
}

export interface TeacherListItem {
  id: string;
  name: string;
  slug: string;
  url: string;
  courses: { name: string }[];
  stats: TeacherStats;
}

export interface TeacherFilterResult {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  teachersResult: TeacherListItem[];
}

export const getTeachersByFilter = async ({
  page = 1,
  take = 12,
  faculty,
  career,
  cycle,
  course,
  search,
}: Props): Promise<TeacherFilterResult> => {
  if (isNaN(Number(page)) || page < 1) page = 1;

  // Build the filter once so the list query and the count stay in sync.
  const where: Prisma.TeacherWhereInput = {
    name: { contains: search, mode: "insensitive" },
    courses: {
      some: {
        course: {
          name: course || undefined,
          filters: {
            some: {
              cycle: { name: cycle || undefined },
              career: {
                name: career || undefined,
                faculty: { name: faculty || undefined },
              },
            },
          },
        },
      },
    },
  };

  try {
    const [teachers, totalCount] = await Promise.all([
      prisma.teacher.findMany({
        where,
        orderBy: { name: "asc" },
        take,
        skip: (page - 1) * take,
        select: {
          id: true,
          name: true,
          slug: true,
          url: true,
          courses: { select: { course: { select: { name: true } } } },
        },
      }),
      prisma.teacher.count({ where }),
    ]);

    const stats = await getTeacherStats(teachers.map((t) => t.id));

    const teachersResult: TeacherListItem[] = teachers.map((t) => ({
      id: t.id,
      name: t.name,
      slug: t.slug,
      url: t.url,
      courses: t.courses.map((c) => ({ name: c.course.name })),
      stats: stats[t.id] ?? EMPTY_STATS,
    }));

    return {
      currentPage: page,
      totalPages: Math.max(1, Math.ceil(totalCount / take)),
      totalCount,
      teachersResult,
    };
  } catch (error) {
    console.log(error);
    return { currentPage: 1, totalPages: 1, totalCount: 0, teachersResult: [] };
  }
};
