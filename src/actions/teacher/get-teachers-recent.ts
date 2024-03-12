'use server'
import prisma from "../../lib/prisma";

export const getTeachersRecent = async () => {
  try {
    const teachersRecent = await prisma.teacher.findMany({
      take: 10,
      include: {
        valorations: {
          orderBy: {
            assignedAt: "desc"
          }
        },
        courses: {
          include: {
            course: true,
          }
        },
        comments:true,
        
      }
    });
    const result = teachersRecent.map(teacher => {
      return {
        ...teacher,
        courses: teacher.courses.map((course) => course.course)
      }
    })

   
    return result;
    
  } catch (error) {
    console.log(error);
    return [];
  }
};
