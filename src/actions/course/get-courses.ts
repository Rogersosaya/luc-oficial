
'use server '
import prisma from "../../lib/prisma";

export const getCourses = async () => {
  try {
    const courses = await prisma.course.findMany();
    
    return courses;
  } catch (error) {
    console.log(error);
    return [];
  }
};

