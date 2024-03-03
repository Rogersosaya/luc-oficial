import React from "react";
import CardTeachers from "../../home/components/CardTeachers";

function ListTeachers() {
  return (
    <>
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-8 mt-9 px-1  md:px-12">
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
