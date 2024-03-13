import React from "react";
import CardTeachers from "../../ui/CardTeachers";

import { Course } from "@/interfaces/course.interface";

interface Valoration {
  rating: number;
  difficulty: number;
  learning: number;
  repeat: boolean;
}

interface Teacher {
  name: string;
  slug: string;
  url: string;
  valorations: Valoration[];
  courses: Course[];
}
interface Props {
  teachers: Teacher[] ;
}

function ListTeachers({ teachers }: Props) {
  return (
    <>
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-3 mt-9 px-2">
        {teachers?.map((teacher) => (
          <CardTeachers key={teacher.slug} teacher={teacher}/>
        ))}
      </div>
      <div></div>
    </>
  );
}

export default ListTeachers;
