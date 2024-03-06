import slugify from "slugify";
import { Contact } from '../interfaces/contact.interface';
import {teachersData, transformGmail  } from "./seed-teacher";
import { Career } from '../interfaces/career.interface';
import { facultiesData } from "./seed-faculty-career";
import { Course } from '../interfaces/course.interface';
import { coursesData } from "./seed-course";
import { cycleData } from "./seed-cycle";
import { Cycle } from '../interfaces/cycle.interface';
import bcryptjs from 'bcryptjs';
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
interface SeedUser {
  email: string;
  name: string;
  role: 'admin'|'user'
}
interface SeedData {
  users: SeedUser[];
  teachers: SeedTeacher[];
  faculties: SeedFaculty[];
  courses: Course[];
  cycles: Cycle[];
}





export const initialData: SeedData = {
  users: [
    {
      name:'Jordan Laureano',
      email: 'jordan.laureano.g@uni.pe',
      role: 'user'
    },
    {
      name:'Roger Sosaya',
      email: 'roger.sosaya.q@uni.pe',
      role: 'admin'
    }
  ],
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
