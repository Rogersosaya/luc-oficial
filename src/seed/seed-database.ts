import { initialData } from "./seed";
import prisma from "../lib/prisma";
import { filters } from "./seed-filters";
import { teachersAndCourse } from "./seed-course-teacher";

async function main() {
  await prisma.user.deleteMany();
  await prisma.filter.deleteMany();
  await prisma.teacherOnCourse.deleteMany();
  await prisma.contact.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.course.deleteMany();
  await prisma.cycle.deleteMany();
  await prisma.career.deleteMany();
  await prisma.faculty.deleteMany();
  await prisma.tag.deleteMany();
  const { teachers, faculties, courses, cycles, users, tags } = initialData;

  await prisma.user.createMany({
    data: users,
  });
  await prisma.tag.createMany({
    data: tags,
  });
  for (const teacherData of teachers) {
    const { contact, ...rest } = teacherData;
    const teacherDB = await prisma.teacher.create({
      data: { ...rest },
    });
    await prisma.contact.create({
      data: { ...contact, teacherId: teacherDB.id },
    });
  }
  for (const facultyData of faculties) {
    const { careers, ...rest } = facultyData;
    const facultyDB = await prisma.faculty.create({
      data: { ...rest },
    });
    for (const careerData of careers) {
      await prisma.career.create({
        data: {
          ...careerData,
          facultyId: facultyDB.id,
        },
      });
    }
  }
  await prisma.course.createMany({
    data: courses,
  });
  await prisma.cycle.createMany({
    data: cycles,
  });
  // get course, career, cycle, teacher
  const coursesDB = await prisma.course.findMany();
  const careersDB = await prisma.career.findMany();
  const cyclesDB = await prisma.cycle.findMany();
  const teachersDB = await prisma.teacher.findMany();

  // get names with id in filters
  const coursesMap = coursesDB.reduce((map, course) => {
    map[course.name.toLowerCase()] = course.id;
    return map;
  }, {} as Record<string, string>);

  const careersMap = careersDB.reduce((map, career) => {
    map[career.name.toLowerCase()] = career.id;
    return map;
  }, {} as Record<string, string>);

  const cyclesMap = cyclesDB.reduce((map, cycle) => {
    map[cycle.name.toLowerCase()] = cycle.id;
    return map;
  }, {} as Record<string, string>);

  const teachersMap = teachersDB.reduce((map, teacher) => {
    map[teacher.name.toLowerCase()] = teacher.id;
    return map;
  }, {} as Record<string, string>);

  filters.forEach(async ({ course, cycle, career }) => {
    const courseItem = course
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const cycleItem = cycle.toLowerCase();
    const careerItem = career.toLowerCase();
    // console.log(courseItem,coursesMap[courseItem], cyclesMap[cycleItem])
    await prisma.filter.create({
      data: {
        courseId: coursesMap[courseItem],
        careerId: careersMap[careerItem],
        cycleId: cyclesMap[cycleItem],
      },
    });
  });

  teachersAndCourse.map(async ({ course, teacher }) => {
    const courseItem = course
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const teacherItem = teacher.toLowerCase();
    // console.log(coursesMap[courseItem], teachersMap[teacherItem])

    await prisma.teacherOnCourse.create({
      data: {
        courseId: coursesMap[courseItem],
        teacherId: teachersMap[teacherItem],
      },
    });
  });
  // const comment1 = await prisma.comment.create({
  //   data: {
  //     value: "as",
  //     teacherId:"0a684a52-70b9-47b6-bf21-7a31a07eccda",
  //     userId:"7e153aeb-a579-4335-a57e-2034cc1b3134"
  //   }
  // })
}

  

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
