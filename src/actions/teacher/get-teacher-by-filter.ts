"use server ";

import prisma from "../../lib/prisma";

interface Props {
  faculty: string;
  career: string;
  cycle: string;
  course: string;
  search: string;
}

export const getTeachersByFilter = async ({
  faculty,
  career,
  cycle,
  course,
  search,
}: Props) => {
  try {
    const teachers = await prisma.teacher.findMany({
      include: {
        courses: {
          include: {
            course: {
              include: {
                filters: {
                  include: {
                    career: {
                      include: {
                        faculty: true,
                      },
                    },
                    cycle: true,
                  },
                },
              },
            },
          },
        },
      },
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },

        courses: {
          some: {
            course: {
              filters: {
                some: {
                  cycle: {
                    name: cycle || {},
                  },
                  career: {
                    faculty: {
                      name: faculty || {},
                    },
                    name: career || {},
                  },
                },
              },
              name: course || {},
            },
          },
        },
      },
    });
    console.log(teachers);
    return teachers;
  } catch (error) {
    console.log(error);
    return [];
  }
};
