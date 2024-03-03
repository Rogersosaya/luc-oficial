import slugify from "slugify";
interface SeedTeacher {
  name: string;
  slug: string;
  url: string;
}

interface SeedData {
  teachers: SeedTeacher[];
}

export const initialData: SeedData = {
  teachers: [
    {
      name: "CAÑOTE-FAJARDO-PERCY VICTOR",
      slug: slugify("CAÑOTE-FAJARDO-PERCY VICTOR"),
      url: "CAÑOTE-FAJARDO-PERCY VICTOR.jpg",
    },
    {
      name: "FISFALEN-HUERTA-MARIO HEINRICH",
      slug: slugify("FISFALEN-HUERTA-MARIO HEINRICH"),
      url: "FISFALEN-HUERTA-MARIO HEINRICH.jpg",
    },
    {
      name: "CERNA-VALDEZ-YARKO ALVARO",
      slug: slugify("CERNA-VALDEZ-YARKO ALVARO"),
      url: "CERNA-VALDEZ-YARKO ALVARO.jpg",
    },
    {
      name: "SALAS-COZ-ERWIN ERASMO",
      slug: slugify("SALAS-COZ-ERWIN ERASMO"),
      url: "SALAS-COZ-ERWIN ERASMO.jpg",
    },
  ],
};
