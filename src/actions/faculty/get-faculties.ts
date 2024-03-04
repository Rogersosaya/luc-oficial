
'use server '
import prisma from "../../lib/prisma";

export const getFaculties = async () => {
  try {
    const faculties = await prisma.faculty.findMany();
    
    return faculties;
  } catch (error) {
    console.log(error);
    return [];
  }
};

