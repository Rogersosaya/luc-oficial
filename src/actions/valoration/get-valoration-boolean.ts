'use server'
import { getServerSession } from "next-auth";
import prisma from "../../lib/prisma";

export const getValorationBoolean = async (teacherId:string) => {
  try {
    const session = await getServerSession();
    if(!session) return true;
    const userEmail = session?.user?.email;
    
    const userCurrent = await prisma.user.findUnique({
      where: {
        email: userEmail!,
      },
    });
    
    const valoration = await prisma.valoration.findFirst({
      where: {
        teacherId: teacherId,
        userId: userCurrent!.id
      }
    });
    const ExistValoration = !!valoration
    console.log(ExistValoration);
    return ExistValoration;
  } catch (error) {
    console.log(error);
  }
};
