"use server";
import prisma from "../../lib/prisma";
import { unstable_cache } from "next/cache";

const getCycleCached = unstable_cache(
  async () => prisma.cycle.findMany({ orderBy: { name: "asc" } }),
  ["cycles"],
  { revalidate: 3600, tags: ["taxonomy"] }
);

export const getCycle = async () => {
  try {
    return await getCycleCached();
  } catch (error) {
    console.log(error);
    return [];
  }
};
