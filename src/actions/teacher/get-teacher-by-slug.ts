"use server";
import prisma from "@/lib/prisma";
export const getTeacherBySlug = async (slug: string) => {
  try {
    const teacher = await prisma.teacher.findUnique({
      where: {
        slug: slug
      },
    });
    
    return teacher;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener profesor por slug");
    
  }
};
