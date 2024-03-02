import React from "react";
import { FaTags } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import CardTeachers from '../../home/components/CardTeachers';

function Others() {
  return (
    <>
      <div className="text-md font-bold mb-5 flex items-center">
        <PiUsersThreeFill className="mr-2 text-secondary" />
        Otros profesores
      </div>
      <div className="px-6 mb-6"><CardTeachers/></div>
      <div className="px-6 mb-6"><CardTeachers/></div>
    </>
  );
}

export default Others;
