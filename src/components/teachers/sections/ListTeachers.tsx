import React from "react";
import CardTeachers from "../../ui/CardTeachers";
import { Teacher } from "@/interfaces/teacher.interface";

interface Props {
  teachers: Teacher[];
}

function ListTeachers({ teachers }: Props) {
  return (
    <>
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-8 mt-9 px-1  md:px-12">
        {teachers.map((teacher) => (
          <CardTeachers key={teacher.slug} teacher={teacher}/>
        ))}
      </div>
      <div></div>
    </>
  );
}

export default ListTeachers;
