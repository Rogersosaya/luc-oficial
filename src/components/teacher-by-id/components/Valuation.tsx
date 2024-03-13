"use client";
import { getValorationsByTeacher } from "@/actions/valoration/get-valorations";
import { Teacher } from "@/interfaces/teacher.interface";
import { useValorationsStore } from "@/store/valorationsStore";
import { Progress } from "@nextui-org/react";
import React, { useEffect } from "react";
import { FaRegStar, FaStar, FaUser } from "react-icons/fa6";
interface PropsTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
}
interface Props {
  teacher: PropsTeacher | null;
}
function Valuation({ teacher }: Props) {
  const { getValorations, valorations } = useValorationsStore();
  useEffect(() => {
    getValorations(teacher!.id);
  }, [getValorations,teacher]);
  const ratings = valorations.map((item) => item.rating);

  let rating1 =
  Number(((ratings.filter((rating) => rating === 1).length / ratings.length) * 100).toFixed(1));
  let rating2 =
  Number(((ratings.filter((rating) => rating === 2).length / ratings.length) * 100).toFixed(1));
  let rating3 =
  Number(((ratings.filter((rating) => rating === 3).length / ratings.length) * 100).toFixed(1));
  let rating4 =
  Number(((ratings.filter((rating) => rating === 4).length / ratings.length) * 100).toFixed(1));
  let rating5 =
  Number(((ratings.filter((rating) => rating === 5).length / ratings.length) * 100).toFixed(1));
  let averageRating =
  Number((ratings.reduce((acc, val) => acc + val, 0) / ratings.length).toFixed(1));

  rating1 = Number.isNaN(rating1) ? 0 : rating1;
  rating2 = Number.isNaN(rating2) ? 0 : rating2;
  rating3 = Number.isNaN(rating3) ? 0 : rating3;
  rating4 = Number.isNaN(rating4) ? 0 : rating4;
  rating5 = Number.isNaN(rating5) ? 0 : rating5;
  averageRating = Number.isNaN(averageRating) ? 0 : averageRating;
  const array = [...Array(5)];

  return (
    <>
      <div className="text-lg font-bold">{teacher?.name}</div>
      <div className="grid grid-cols-12 w-full">
        <div className="p-3 flex flex-col items-center justify-center col-span-5">
          <div className="text-lg ">Valoración</div>
          <div className="text-2xl font-bold">{averageRating}</div>
          <div className="flex">
          {array.map((_, index) => {
          const currentRating = index + 1;
          return (
            <div key={index}>
              {currentRating <= averageRating ? (
                <FaStar className="text-danger" size={18} />
              ) : (
                <FaRegStar className="text-danger"  size={18} />
              )}
            </div>
          );
        })}
            
          </div>
          <div className="flex justify-center mt-3 items-center">
          <FaUser  className="text-secondary" size={20} />
            <span className="ml-2 text-lg">{valorations.length}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full col-span-7 px-2 md:px-10">
          <div className="flex items-center w-full">
            <span className="text-md mr-1">5</span>
            <FaStar className="text-danger" size={20} />
            <Progress
              className="ml-1 mr-2 max-w-40 md:max-w-80"
              size="md"
              radius="sm"
              aria-label="1"
              classNames={{
                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
              value={rating5}
            />
            <span className="text-md">%{rating5}</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-md mr-1">4</span>
            <FaStar className="text-danger" size={20} />
            <Progress
              className="ml-1 mr-2 max-w-40 md:max-w-80"
              size="md"
              radius="sm"
              aria-label="1"
              classNames={{
                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
              value={rating4}
            />
            <span className="text-md">%{rating4}</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-md mr-1">3</span>
            <FaStar className="text-danger" size={20} />
            <Progress
              className="ml-1 mr-2 max-w-40 md:max-w-80"
              size="md"
              radius="sm"
              aria-label="1"
              classNames={{
                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
              value={rating3}
            />
            <span className="text-md">%{rating3}</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-md mr-1">2</span>
            <FaStar className="text-danger" size={20} />
            <Progress
              className="ml-1 mr-2 max-w-40 md:max-w-80"
              size="md"
              radius="sm"
              aria-label="1"
              classNames={{
                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
              value={rating2}
            />
            <span className="text-md">%{rating2}</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-md mr-1">1</span>
            <FaStar className="text-danger" size={20} />
            <Progress
              className="ml-1 mr-2 max-w-40 md:max-w-80"
              size="md"
              radius="sm"
              aria-label="1"
              classNames={{
                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
              value={rating1}
            />
            <span className="text-md">%{rating1}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Valuation;
