"use server";
import prisma from "../../lib/prisma";
import { unstable_cache } from "next/cache";

const getFacultiesCached = unstable_cache(
  async () => prisma.faculty.findMany({ orderBy: { name: "asc" } }),
  ["faculties"],
  { revalidate: 3600, tags: ["taxonomy"] }
);

export const getFaculties = async () => {
  try {
    return await getFacultiesCached();
  } catch (error) {
    console.log(error);
    return [];
  }
};
