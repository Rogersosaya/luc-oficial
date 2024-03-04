
'use server '
import prisma from "../../lib/prisma";

export const getCycle = async () => {
  try {
    const cycles = await prisma.cycle.findMany();
    
    return cycles;
  } catch (error) {
    console.log(error);
    return [];
  }
};

