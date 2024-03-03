import React from "react";
import { FaTags } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import CardTeachers from "../../ui/CardTeachers";
import { Teacher } from "@/interfaces/teacher.interface";

function Others({ teachers }: { teachers: Teacher[] }) {
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
