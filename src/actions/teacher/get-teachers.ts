'use server '
import prisma from "../../lib/prisma";

export const getTeachers = async () => {
  try {
    const teachers = await prisma.teacher.findMany({
      select: {
        name: true,
        slug: true,
        url: true,
        
      }
    });
    
    return teachers;
  } catch (error) {
    console.log(error);
    return [];
  }
};
