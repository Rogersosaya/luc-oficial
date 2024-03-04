
'use server '
import prisma from "../../lib/prisma";

export const getCareersByFaculty = async ({faculty}: {faculty:string}) => {
  try {
    const careers = await prisma.career.findMany({
      include: {
        faculty:true
      },
      where: {
        faculty: {
          name: faculty || {}
        }
      }
    }
    );
    
    return careers;
  } catch (error) {
    console.log(error);
    return [];
  }
};

