import React from "react";
import { PiUsersThreeFill } from "react-icons/pi";
import CardTeachers from "../../ui/CardTeachers";
import { Course } from "@/interfaces/course.interface";
interface Valoration {
  rating:number,
  difficulty: number,
  learning: number,
  repeat: boolean,

}
interface CourseProps {
  course:Course,
}
interface Teacher {
  name: string,
  slug:string,
  url:string,
  valorations: Valoration[];
  courses: Course[];
}
interface Props {
  teachers: Teacher[]
}
function Others({ teachers }: Props) {
  return (
    <>
      <div className="text-md font-bold mb-5 flex items-center">
        <PiUsersThreeFill className="mr-2 text-secondary" />
        Otros profesores
      </div>
      {teachers.map((teacher) => (
        <div key={teacher.slug} className="px-6 mb-6">
          <CardTeachers teacher={teacher} />
        </div>
      ))}
    </>
  );
}

export default Others;
