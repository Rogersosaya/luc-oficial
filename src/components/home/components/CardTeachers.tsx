"use client";
import React, { useState } from "react";
import classNames from "classnames";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { FaRegStar, FaStar, FaFire } from "react-icons/fa6";
import { Button, Chip } from "@nextui-org/react";
import { AiFillFire, AiOutlineFire } from "react-icons/ai";
import { FaRepeat } from "react-icons/fa6";

import { FaFireAlt } from "react-icons/fa";
import { IoBook, IoBookOutline } from "react-icons/io5";
import Link from "next/link";

const CardDisplayTrue = () => (
  <div className="bg-tertiary rounded-[20px] p-2 px-2 min-h-[280px] flex justify items-center flex-col">
    <Image
      src={"/img/glen.jpg"}
      width={150}
      height={150}
      alt="web-development"
      className="object-contain rounded-lg"
    />

    <h3 className="text-white text-sm font-bold text-center mt-2">
      RODRIGUEZ-RAFAEL-GLEN DARIO
    </h3>

    <div className="flex mt-2 flex-wrap justify-center">
      <Chip color="primary" variant="solid" className="mr-1 mb-1">
        POO
      </Chip>
      <Chip color="primary" variant="solid" className="mr-1 mb-1">
        MCD
      </Chip>
    </div>
  </div>
);
const CardDisplayFalse = () => (
  <div className="bg-tertiary rounded-[20px] p-2 px-2 min-h-[280px] flex justify-center items-center flex-col" >
    <div className="flex justify-center items-center">
      <FaStar size={20} />
      <FaStar size={20} />
      <FaStar size={20} />
      <FaStar size={20} />
      <FaRegStar size={20} />
      <span className="ml-2 text-lg">4.5</span>
    </div>
    <div className="flex justify-center items-center my-4">
      <AiFillFire size={20} />
      <AiFillFire size={20} />
      <AiFillFire size={20} />
      <AiFillFire size={20} />
      <AiOutlineFire size={20} />
      <span className="ml-2 text-lg">4.5</span>
    </div>
    <div className="flex justify-center items-center">
      <IoBook size={20} />
      <IoBook size={20} />
      <IoBook size={20} />
      <IoBook size={20} />
      <IoBookOutline size={20} />
      <span className="ml-2 text-lg">4.5</span>
    </div>
    <div className="flex justify-center items-center my-4">
      <FaRepeat size={20} />

      <span className="ml-2 text-lg">60%</span>
    </div>
    <div className="flex justify-center items-center my-1">
      <Link href ="/teacher/2">
      <Button size="lg" variant="shadow" className="bg-gradient-to-tr from-primary to-secondary text-white shadow-lg text-md font-bold">
        Ver más
      </Button>
      </Link>

      
    </div>
  </div>
);

function CardTeachers() {
  const [displayDiv, setDisplayDiv] = useState(true);

  return (
    <>
      <Tilt className=" ">
        <div
          onMouseEnter={() => setDisplayDiv(false)}
          onMouseLeave={() => setDisplayDiv(true)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          {displayDiv ? <CardDisplayTrue /> : <CardDisplayFalse />}
        </div>
      </Tilt>
    </>
  );
}

export default CardTeachers;
