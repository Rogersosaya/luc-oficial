"use server";
import prisma from "../../lib/prisma";

export const getTeachersAndValorations = async () => {
  try {
    const courses = await prisma.course.findMany({
      select: {
        name: true,
        teachers: {
          select: {
            teacher: {
              select: {
                name: true,
                slug: true,
                valorations: {
                  select: {
                    rating: true,
                    difficulty: true,
                    learning: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    const valorationsProm = courses.map((course) => ({
      courseName: course.name,
      teachers: course.teachers.map((teacher) => ({
        teacherName: teacher.teacher.name,
        teacherSlug: teacher.teacher.slug,
        teacherUrl: `luc-uni.vercel.app/teacher/${teacher.teacher.slug}`,
        valorations: {
          ratingProm: (
            teacher.teacher.valorations.reduce(
              (acc, valoration) => acc + valoration.rating,
              0
            ) / teacher.teacher.valorations.length
          ).toFixed(0),
          difficultyProm: (
            teacher.teacher.valorations.reduce(
              (acc, valoration) => acc + valoration.difficulty,
              0
            ) / teacher.teacher.valorations.length
          ).toFixed(0),
          learningProm: (
            teacher.teacher.valorations.reduce(
              (acc, valoration) => acc + valoration.learning,
              0
            ) / teacher.teacher.valorations.length
          ).toFixed(0),
        },
      })),
    }));
    // const valorationsProm = teachers.map((teacher) => ({
    //   name: teacher.name,
    //   valorations: {
    //     ratingProm: (
    //       teacher.valorations.reduce(
    //         (acc, valoration) => acc + valoration.rating,
    //         0
    //       ) / teacher.valorations.length
    //     ).toFixed(0),
    //     difficultyProm: (
    //       teacher.valorations.reduce(
    //         (acc, valoration) => acc + valoration.rating,
    //         0
    //       ) / teacher.valorations.length
    //     ).toFixed(0),
    //     learningProm: (
    //       teacher.valorations.reduce(
    //         (acc, valoration) => acc + valoration.learning,
    //         0
    //       ) / teacher.valorations.length
    //     ).toFixed(0),
    //
    //   },
    // }));
    return valorationsProm ;
  } catch (error) {
    console.log(error);
    return [];
  }
};
