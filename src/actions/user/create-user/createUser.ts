"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createUser = async (
  id: string,
  name: string,
  email: string,
  image: string
) => {
  try {
    await prisma.user.create({
      data: {
        id: id,
        name: name,
        email: email,
        image: image,
      },
    });
    revalidatePath("/");

    return true;
  } catch (error) {
    console.log(error);
  }
};
