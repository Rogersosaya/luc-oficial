'use server'
import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

interface ValorationProps{
    teacherId: string,
    rating: number,
    difficulty: number,
    learning: number,
    repeat: boolean,
}

export const createValoration = async ({teacherId, rating, difficulty,learning, repeat}:ValorationProps) => {
  try {
    const session = await getServerSession();
    const userEmail = session?.user?.email;
    const userCurrent = await prisma.user.findUnique({
      where: {
        email: userEmail!,
      },
    });
    const valoration = await prisma.valoration.create({
      data:{
        rating: rating,
        difficulty: difficulty,
        learning: learning,
        repeat: repeat,
        teacherId: teacherId,
        userId: userCurrent!.id
      }
    });


    return valoration;
  } catch (error) {
    console.log(error);
  }
};
