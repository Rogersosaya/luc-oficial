"use server";
import prisma from "../../lib/prisma";

export const getTopTeachers = async () => {
  try {
    const topTeachersDB = await prisma.teacher.findMany({
      include: {
        valorations: true,
      },
    });
    const topTeachers = topTeachersDB.filter(teacher => teacher.valorations.length > 7);

    const teachersWithAverageRating = topTeachers.map((teacher) => {
      const totalRating = teacher.valorations.reduce(
        (acc, val) => acc + val.rating,
        0
      );
      const averageRating = isNaN(totalRating / teacher.valorations.length)
        ? 0
        : totalRating / teacher.valorations.length;
      return { ...teacher, averageRating };
    });
    const sortedTeachers = teachersWithAverageRating.sort(
      (a, b) => b.averageRating - a.averageRating
    );

    const top3Teachers = sortedTeachers.slice(0, 3);
    return top3Teachers;
  } catch (error) {
    console.log(error);
    return [];
  }
};
