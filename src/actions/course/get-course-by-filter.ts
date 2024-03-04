"use server ";
import prisma from "../../lib/prisma";

interface Props {
  faculty: string;
  career: string;
  cycle: string;
}

export const getCoursesByFilter = async ({ faculty, career, cycle }: Props) => {
  try {
    const courses = await prisma.course.findMany({
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
      where: {
        filters: {
          some: {
            career: {
              faculty: {
                name: faculty || {},
              },
              name: career || {},
            },
            cycle: {
              name: cycle || {}
            }
          },
        },
      },
    });

    
    return courses;
  } catch (error) {
    console.log(error);
    return [];
  }
};
