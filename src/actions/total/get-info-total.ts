'use server'
import prisma from "../../lib/prisma";

export const getTotal = async () => {
  try {
    
    const teachersTotal = await prisma.teacher.count({})   ;
    const commentsTotal = await prisma.comment.count({})   ;
    const valorationsTotal = await prisma.valoration.count({});
    const usersTotal = await prisma.user.count({});

    return {teachersTotal, commentsTotal, valorationsTotal, usersTotal};
  } catch (error) {
    console.log(error);
    return {}
  }
};
