import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa6";

import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import FeatureCommentFast from '../components/FeatureCommentFast';

function Podium() {
  return (
    <>
    <FeatureCommentFast/>
    <div className="mb-12 ">
      <FaCrown size={80} className="mx-auto text-yellow-400" />
      <div className="flex justify-center">
        <div className="text-center mt-16 -mr-5">
          <div className="relative">
            <div className="rounded-full overflow-hidden border-5 border-primary relative text-center">
              <Image
                src="/img/glen.jpg"
                width={230}
                height={230}
                alt="podium"
              />
            </div>
            <div className="rounded-full absolute text-3xl bg-primary text-white bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-10 h-10 text-center font-bold">
              1
            </div>
          </div>
          <div className="mt-6 font-normal text-2xl text-slate-300   relative z-50 text leading-7 mb-4">
            Glen Rodriguez
          </div>
          <div className="flex justify-center items-center">
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaRegStar size={20} />
            <span className="ml-2 text-lg">4.5</span>
          </div>
          <div className="flex justify-center mt-3 items-center">
            <FaUser size={20} />
            <span className="ml-2 text-lg">110</span>
          </div>
        </div>
        <div className="text-center z-10">
          <div className="relative">
            <div className="rounded-full overflow-hidden border-5 border-yellow-400 relative text-center">
              <Image
                src="/img/glen.jpg"
                width={230}
                height={230}
                alt="podium"
              />
            </div>
            <div className="rounded-full absolute text-3xl bg-yellow-400  text-white bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-10 h-10 text-center font-bold">
              1
            </div>
          </div>
          <div className="mt-6 font-normal text-2xl text-slate-300   relative z-50 text leading-7 mb-4">
            Glen Rodriguez
          </div>
          <div className="flex justify-center items-center">
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaRegStar size={20} />
            <span className="ml-2 text-lg">4.5</span>
          </div>
          <div className="flex justify-center mt-3 items-center">
            <FaUser size={20} />
            <span className="ml-2 text-lg">110</span>
          </div>
        </div>
        <div className="text-center mt-28 -ml-5">
          <div className="relative">
            <div className="rounded-full overflow-hidden border-5 border-secondary relative text-center">
              <Image
                src="/img/glen.jpg"
                width={230}
                height={230}
                alt="podium"
              />
            </div>
            <div className="rounded-full absolute text-3xl bg-secondary text-white bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-10 h-10 text-center font-bold">
              1
            </div>
          </div>
          <div className="mt-6 font-normal text-2xl text-slate-300   relative z-50 text leading-7 mb-4">
            Glen Rodriguez
          </div>
          <div className="flex justify-center items-center">
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaRegStar size={20} />
            <span className="ml-2 text-lg">4.5</span>
          </div>
          <div className="flex justify-center mt-3 items-center">
            <FaUser size={20} />
            <span className="ml-2 text-lg">110</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Podium;
