"use server";

import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

interface Props {
  teacherId: string;
}

export const getValorationsByTeacher = async ({ teacherId }: Props) => {
  try {
    

    const valorations = await prisma.valoration.findMany({
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
      where: {
        teacherId: teacherId,
      },
    });
    const result = valorations.map(valoration => {
      return {
        ...valoration,
        tags: valoration.tags.map((tag) => tag.tag)
      }
    })
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
