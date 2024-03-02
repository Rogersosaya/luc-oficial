import React from "react";
import CardTeachers from "../../home/components/CardTeachers";

function ListTeachers() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-4 mt-9 px-1  md:px-12">
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
        <CardTeachers />
      </div>
      <div></div>
    </>
  );
}

export default ListTeachers;
