import slugify from "slugify";
import { Contact } from '../interfaces/contact.interface';
import {teachersData, transformGmail  } from "./seed-teacher";
import { Career } from '../interfaces/career.interface';
import { facultiesData } from "./seed-faculty-career";
import { Course } from '../interfaces/course.interface';
import { coursesData } from "./seed-course";
import { cycleData } from "./seed-cycle";
import { Cycle } from '../interfaces/cycle.interface';
interface SeedTeacher {
  name: string;
  slug: string;
  url: string;
  contact: Contact
}
interface SeedFaculty {
  name: string;
  careers: Career[]
} 
interface SeedData {
  teachers: SeedTeacher[];
  faculties: SeedFaculty[];
  courses: Course[];
  cycles: Cycle[];
}




export const initialData: SeedData = {

  teachers: teachersData.map(teacher => ({
    name: teacher.name,
    slug: slugify(teacher.name),
    url: `${teacher.name}.jpg`,
    contact: {
      urlLinkedin: teacher.urlLinkedin,
      urlGmail: transformGmail(teacher.name)
    }
  })),
  faculties:facultiesData,
  courses: coursesData,
  cycles: cycleData,
};
