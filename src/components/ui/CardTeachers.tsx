"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegStar, FaStar, FaFire } from "react-icons/fa6";
import { Button, Chip } from "@nextui-org/react";
import { AiFillFire, AiOutlineFire } from "react-icons/ai";
import { FaRepeat } from "react-icons/fa6";

import { IoBook, IoBookOutline } from "react-icons/io5";
import Link from "next/link";

import { Course } from "@/interfaces/course.interface";
import { FaUser } from "react-icons/fa";
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
  teacher: Teacher;
}
const CardDisplayTrue = ({ teacher }: Props) => (
  <div className=" rounded-[20px] pt-1 px-2 min-h-[260px] md:min-h-[280px] flex justify items-center flex-col ">
    <Image
      src='/teacher.png'
      width={130}
      height={130}
      alt="web-development"
      className="object-contain rounded-lg w-48 h-48 md:w-60 md:h-60"
      priority={false}
    />

    <h3 className="text-white text-xs md:text-xs font-bold text-center mt-1">
      {teacher.name}
    </h3>

    <div className="flex flex-col mt-1 flex-wrap justify-center">
      {teacher.courses.map((course) => {
        let courseValue = course.name || '';
        if (courseValue.length > 20) {
          courseValue = courseValue.slice(0, 20) + "...";
        }
        return (
          <div className="bg-secondary rounded-lg text-black px-2 py-1 font-bold mx-2  mb-1.5 text-base  items-center" key={course.name}>
            {courseValue}
          </div>
        );
      })}
    </div>
  </div>
);
const CardDisplayFalse = ({ teacher }: Props) => {
  const array = [...Array(5)];
  const cantValorations = teacher.valorations.length
  const ratings = teacher.valorations.map((item) => item.rating);
  const difficulties = teacher.valorations.map((item) => item.difficulty);
  const learnings = teacher.valorations.map((item) => item.learning);
  const rapeats = teacher.valorations.map((item) => item.repeat);
  let averageRating = Number(
    (ratings.reduce((acc, val) => acc + val, 0) / ratings.length).toFixed(1)
  );
  averageRating = Number.isNaN(averageRating) ? 0 : averageRating;

  let averageDifficulty = Number(
    (
      difficulties.reduce((acc, val) => acc + val, 0) / difficulties.length
    ).toFixed(1)
  );
  averageDifficulty = Number.isNaN(averageDifficulty) ? 0 : averageDifficulty;

  let averageLearning = Number(
    (learnings.reduce((acc, val) => acc + val, 0) / learnings.length).toFixed(1)
  );
  averageLearning = Number.isNaN(averageLearning) ? 0 : averageLearning;

  // Repeat
  
  let truesPercentage = Number(((rapeats.filter((rapeat) => rapeat === true).length / rapeats.length) * 100).toFixed(1));
  
  truesPercentage = (Number.isNaN(truesPercentage) ? 0 : truesPercentage);
  return (
    <div className=" rounded-[20px] p-2 px-2  flex justify-center items-center flex-col">
      <div className="flex justify-center items-center mt-7 mb-2">
        {array.map((_, index) => {
          const currentRating = index + 1;
          return (
            <div key={index}>
              {currentRating <= averageRating ? (
                <FaStar className="text-danger"  size={18} />
              ) : (
                <FaRegStar className="text-danger"  size={18} />
              )}
            </div>
          );
        })}
        <span className="ml-2 text-lg">{averageRating}</span>
      </div>
      <div className="flex justify-center items-center mb-2">
        {array.map((_, index) => {
          const currentDifficulty = index + 1;
          return (
            <div key={index}>
              {currentDifficulty <= averageDifficulty ? (
                <AiFillFire className="text-danger"  size={18} />
              ) : (
                <AiOutlineFire className="text-danger"  size={18} />
              )}
            </div>
          );
        })}

        <span className="ml-2 text-lg">{averageDifficulty}</span>
      </div>
      <div className="flex justify-center items-center mb-2">
      {array.map((_, index) => {
          const currentLearning = index + 1;
          return (
            <div key={index}>
              {currentLearning <= averageLearning ? (
                <IoBook className="text-danger" size={18} />
              ) : (
                <IoBookOutline className="text-danger"  size={18} />
              )}
            </div>
          );
        })}
       
        <span className="ml-2 text-lg">{averageLearning}</span>
      </div>
      <div className="flex justify-center items-center mb-4">
        <FaRepeat className="text-danger" size={20} />
        <span className="ml-2 text-lg">{truesPercentage}%</span>
      </div>
      <div className="flex justify-center items-center mb-5">
        <FaUser className="text-secondary" size={20} />
        <span className="ml-2 text-lg">{cantValorations}</span>
      </div>
      <div className="flex justify-center items-center my-1">
        <Link href={`/teacher/${teacher.slug}`}>
          <Button
            size="lg"
            color="primary"
            className=" text-white shadow-lg text-md font-bold"
          >
            Ver más
          </Button>
        </Link>
      </div>
    </div>
  );
};

function CardTeachers({ teacher }: Props) {
  const [displayDiv, setDisplayDiv] = useState(true);

  return (
    <div
      onMouseEnter={() => setDisplayDiv(false)}
      onMouseLeave={() => setDisplayDiv(true)}
      className="h-[320px] w-[200px]  p-[1px] box mx-auto mb-2 "
    >
      {displayDiv ? (
        <CardDisplayTrue teacher={teacher} />
      ) : (
        <CardDisplayFalse teacher={teacher} />
      )}
    </div>
  );
}

export default CardTeachers;
