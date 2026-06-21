"use server";
import prisma from "../../lib/prisma";
import { unstable_cache } from "next/cache";

interface Props {
  faculty: string;
  career: string;
  cycle: string;
}

export const getCoursesByFilter = async ({ faculty, career, cycle }: Props) => {
  try {
    return await unstable_cache(
      async () =>
        prisma.course.findMany({
          where: {
            filters: {
              some: {
                career: {
                  name: career || undefined,
                  faculty: { name: faculty || undefined },
                },
                cycle: { name: cycle || undefined },
              },
            },
          },
          orderBy: { name: "asc" },
          select: { id: true, name: true },
        }),
      ["courses-by-filter", faculty ?? "", career ?? "", cycle ?? ""],
      { revalidate: 3600, tags: ["taxonomy"] }
    )();
  } catch (error) {
    console.log(error);
    return [];
  }
};
