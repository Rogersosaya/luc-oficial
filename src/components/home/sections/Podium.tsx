import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa6";

import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import FeatureCommentFast from '../components/FeatureCommentFast';
import { getTopTeachers } from "@/actions/teacher/gert-top-teachers";

async function Podium() {
  const topTeachers = await getTopTeachers()
  const top1 = topTeachers[0];
  const top2 = topTeachers[1];
  const top3 = topTeachers[2];
  
  const array = [...Array(5)];

  return (
    <>
    <FeatureCommentFast/>
    <div className="mb-12 ">
      <FaCrown size={80} className="mx-auto text-yellow-400" />
      <div className="flex justify-center">
        <div className="text-center mt-16 -mr-5 flex flex-col items-center">
          <div className="relative ">
            <div className="rounded-full overflow-hidden border-5 border-primary relative text-center">
              <Image
                src={`/teachers/${top2.url}`}
                width={230}
                height={230}
                alt="podium"
              />
            </div>
            <div className="rounded-full absolute text-3xl bg-primary text-white bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-10 h-10 text-center font-bold">
              2
            </div>
          </div>
          <div className="mt-6 font-normal text-xl text-slate-300 relative z-50 text leading-10 mb-4 w-80 text-center">
          {top2.name}
          </div>
          <div className="flex justify-center items-center">
          {array.map((_, index) => {
              const currentRating = index + 1;
              return (
                <FaStar
                  key={index}
                  size={18}
                  color={currentRating <= top2.averageRating ? "yellow" : ""}
                />
              );
            })}
            
            <span className="ml-2 text-lg">{top2.averageRating}</span>
          </div>
          <div className="flex justify-center mt-3 items-center">
            <FaUser size={20} />
            <span className="ml-2 text-lg">{top2.valorations.length}</span>
          </div>
        </div>
        <div className="text-center z-10 flex flex-col items-center">
          <div className="relative">
            <div className="rounded-full overflow-hidden border-5 border-yellow-400 relative text-center">
              <Image
                src={`/teachers/${top1.url}`}
                width={230}
                height={230}
                alt="podium"
              />
            </div>
            <div className="rounded-full absolute text-3xl bg-yellow-400  text-white bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-10 h-10 text-center font-bold">
              1
            </div>
          </div>
          <div className="mt-6 font-normal text-xl text-slate-300 relative z-50 text leading-10 mb-4 w-80 text-center">
          {top1.name}
          </div>
          <div className="flex justify-center items-center">
          {array.map((_, index) => {
              const currentRating = index + 1;
              return (
                <FaStar
                  key={index}
                  size={18}
                  color={currentRating <= top1.averageRating ? "yellow" : ""}
                />
              );
            })}
            <span className="ml-2 text-lg">{top1.averageRating}</span>
          </div>
          <div className="flex justify-center mt-3 items-center">
            <FaUser size={20} />
            <span className="ml-2 text-lg">{top1.valorations.length}</span>
          </div>
        </div>
        <div className="text-center mt-28 -ml-5 flex flex-col items-center">
          <div className="relative">
            <div className="rounded-full overflow-hidden border-5 border-secondary relative text-center">
              <Image
                src={`/teachers/${top3.url}`}
                width={230}
                height={230}
                alt="podium"
              />
            </div>
            <div className="rounded-full absolute text-3xl bg-secondary text-white bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-10 h-10 text-center font-bold">
              3
            </div>
          </div>
          <div className="mt-6 font-normal text-xl text-slate-300 relative z-50 text leading-10 mb-4 w-80 text-center">
          {top3.name}
          </div>
          <div className="flex justify-center items-center">
          {array.map((_, index) => {
              const currentRating = index + 1;
              return (
                <FaStar
                  key={index}
                  size={18}
                  color={currentRating <= top3.averageRating ? "yellow" : ""}
                />
              );
            })}
            <span className="ml-2 text-lg">{top3.averageRating}</span>
          </div>
          <div className="flex justify-center mt-3 items-center">
            <FaUser size={20} />
            <span className="ml-2 text-lg">{top3.valorations.length}</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Podium;
