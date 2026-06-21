"use server";
import { ValueReaction } from "@/interfaces/reaction.interface";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

interface Props {
  value: ValueReaction;
  commentId: string;
}

export const createReaction = async ({ commentId, value }: Props) => {
  try {
    const session = await getServerSession();
    const userEmail = session?.user?.email;
    if (!userEmail) return;

    const userCurrent = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { id: true },
    });
    if (!userCurrent) return;

    // Single lookup for any existing reaction by this user on this comment.
    const existing = await prisma.reaction.findFirst({
      where: { commentId, userId: userCurrent.id },
      select: { id: true, value: true },
    });

    if (existing) {
      // Same reaction already set: nothing to change.
      if (existing.value === value) return existing;
      const updated = await prisma.reaction.update({
        where: { id: existing.id },
        data: { value },
      });
      revalidatePath("/");
      return updated;
    }

    const created = await prisma.reaction.create({
      data: { value, commentId, userId: userCurrent.id },
    });
    revalidatePath("/");
    return created;
  } catch (error) {
    console.log(error);
  }
};
