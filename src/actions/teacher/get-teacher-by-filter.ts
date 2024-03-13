"use server ";

import prisma from "../../lib/prisma";

interface Props {
  page?: number,
  take?:number,
  faculty?: string;
  career?: string;
  cycle?: string;
  course?: string;
  search: string;
}

export const getTeachersByFilter = async ({
  page=1,
  take= 12,
  faculty,
  career,
  cycle,
  course,
  search,
}: Props) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;
  try {
    const teachers = await prisma.teacher.findMany({
      orderBy: {
        name: "asc",
      },
      take: take,
      skip: (page - 1) * take,
      include: {
        valorations:true,
        
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
    const totalCount = await prisma.teacher.count();
    
    const totalPages = Math.ceil(totalCount / take);
    const teachersResult = teachers.map(teacher => {
      return {
        ...teacher,
        courses: teacher.courses.map((course) => course.course)
      }
    })
    return  {currentPage: page,totalPages:totalPages,  teachersResult} ;
  } catch (error) {
    console.log(error);
    return {}
  }
};
