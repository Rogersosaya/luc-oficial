'use server'
import prisma from "../../lib/prisma";

export const getUser = async (userEmail:string) => {
  try {
    const user = await prisma.user.findUnique({
        where: {
            email: userEmail,
        }
    })
    
    return user;
  } catch (error) {
    console.log(error);
    
  }
};
