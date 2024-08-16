"use server";
import prisma from "../../lib/prisma";

export const getTeachersAndValorations = async () => {
  try {
    const teachers = await prisma.teacher.findMany({
      select: {
        name: true,
        slug:true,
        valorations: {
          select: {
            rating: true,
            difficulty: true,
            learning: true,
          },
        },
      },
    });

    const valorationsProm = teachers.map((teacher) => ({
      name: teacher.name,
      valorations: 
        {
          ratingProm: (
            teacher.valorations.reduce(
              (acc, valoration) => acc + valoration.rating,
              0
            ) / teacher.valorations.length
          ).toFixed(0),
          difficultyProm: (
            teacher.valorations.reduce(
              (acc, valoration) => acc + valoration.rating,
              0
            ) / teacher.valorations.length
          ).toFixed(0),
          learningProm: (
            teacher.valorations.reduce(
              (acc, valoration) => acc + valoration.learning,
              0
            ) / teacher.valorations.length
          ).toFixed(0),
          urlTeacher: `luc-uni.vercel.app/teacher/${teacher.slug}`
        },
      
    }));
    return valorationsProm;
  } catch (error) {
    console.log(error);
    return [];
  }
};
