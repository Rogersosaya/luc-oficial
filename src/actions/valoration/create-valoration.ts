"use server";
import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";
import { revalidatePath } from "next/cache";

interface ValorationProps {
  teacherId: string;
  rating: number;
  difficulty: number;
  learning: number;
  repeat: boolean;
  tags: string[];
}

export const createValoration = async ({
  teacherId,
  rating,
  difficulty,
  learning,
  repeat,
  tags,
}: ValorationProps) => {
  try {
    const session = await getServerSession();
    const userEmail = session?.user?.email;
    if (!userEmail) return;

    const userCurrent = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { id: true },
    });
    if (!userCurrent) return;

    // Resolve all selected tags in a single query (was N queries).
    const tagsDB = tags.length
      ? await prisma.tag.findMany({
          where: { name: { in: tags } },
          select: { id: true, name: true },
        })
      : [];

    // Create the valoration and its tag links atomically.
    const newValoration = await prisma.$transaction(async (tx) => {
      const created = await tx.valoration.create({
        data: {
          rating,
          difficulty,
          learning,
          repeat,
          teacherId,
          userId: userCurrent.id,
        },
      });

      if (tagsDB.length) {
        await tx.valorationOnTag.createMany({
          data: tagsDB.map((tag) => ({
            tagId: tag.id,
            valorationId: created.id,
          })),
        });
      }

      return created;
    });

    revalidatePath("/");

    // Shape matches getValorationsByTeacher items (tags flattened).
    return { ...newValoration, tags: tagsDB };
  } catch (error) {
    console.log(error);
  }
};
