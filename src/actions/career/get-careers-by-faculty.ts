"use server";
import prisma from "../../lib/prisma";
import { unstable_cache } from "next/cache";

export const getCareersByFaculty = async ({ faculty }: { faculty: string }) => {
  try {
    return await unstable_cache(
      async () =>
        prisma.career.findMany({
          where: { faculty: { name: faculty || undefined } },
          orderBy: { name: "asc" },
          include: { faculty: true },
        }),
      ["careers-by-faculty", faculty ?? ""],
      { revalidate: 3600, tags: ["taxonomy"] }
    )();
  } catch (error) {
    console.log(error);
    return [];
  }
};
