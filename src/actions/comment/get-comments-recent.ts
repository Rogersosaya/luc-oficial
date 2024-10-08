"use server";
import prisma from "../../lib/prisma";

export const getCommentsRecent = async () => {
  try {
    const comments = await prisma.comment.findMany({
        take: 15,
      
      select: {
        id:true,
        value: true,
        occult:true,
        user:{
            select:{
                image:true,
            }
        },
        teacher:{
            select:{
              name:true,
                url:true,
            }
        },
      },
      orderBy: {
        assignedAt: "desc",
      },
    });
    
    return comments;
  } catch (error) {
    console.log(error);
    return [];
  }
};
