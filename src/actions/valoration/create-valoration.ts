"use server";
import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";
import { Tag } from "@/interfaces/tag-interface";

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
    const userCurrent = await prisma.user.findUnique({
      where: {
        email: userEmail!,
      },
    });
    const newValoration = await prisma.valoration.create({
      data: {
        rating: rating,
        difficulty: difficulty,
        learning: learning,
        repeat: repeat,
        teacherId: teacherId,
        userId: userCurrent!.id,
      },
    });
    const tagsDBPromises = tags.map(async (tag) => {
      return await prisma.tag.findUnique({
        where: {
          name: tag,
        },
      });
    });
    const tagsDB = await Promise.all(tagsDBPromises);

    const valorationOnTagsDBPromises = tagsDB.map(async(tag) => {
      return await prisma.valorationOnTag.create({
        data: {
          tagId: tag!.id,
          valorationId:  newValoration.id,
        }
      })
    })    
    await Promise.all(valorationOnTagsDBPromises);

    const newValorationWithId = await prisma.valoration.findUnique({
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
      where: {
        id: newValoration.id
      }
    })
    if(newValorationWithId !== null){
      const newValorationData = {
        ...newValorationWithId,
        tags: newValorationWithId.tags.map((tag) => tag!.tag)
      }
    return newValorationData;
    }
    
   
    return 
  } catch (error) {
    console.log(error);
  }
};
