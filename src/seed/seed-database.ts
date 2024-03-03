import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  await prisma.teacher.deleteMany();

  const { teachers } = initialData;
  await prisma.teacher.createMany({
    data: teachers,
  });
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
