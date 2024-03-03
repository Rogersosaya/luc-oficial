"use client";
import DropdownDetails from "@/components/teacher-by-id/components/DropdownDetails";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineDoubleArrow } from "react-icons/md";

interface Props {
  urlCollaboration: string;
}

function CardCommentFast() {
  return (
    <>
      <Card className="w-96 bg-transparent border border-slate-600 mb-2 pb-2 mx-3 mt-24">
        <CardHeader className="justify-between">
          <div className="flex gap-2 items-center">
            <Avatar isBordered radius="full" size="md" src="/img/jordan.jpg" color="primary" />
            
            <MdOutlineDoubleArrow className="mx-2" size={25}/>


            <Avatar isBordered radius="full" size="md" src="/img/glen.jpg" color="secondary" />
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-600 overflow-hidden">
          <p>
            Frontend developer and UI/UX enthusiast. Join me on this coding
            adventure! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Excepturi dolorem, placeat asperiores perspiciatis...
          </p>
        </CardBody>
      </Card>
      {/* <div className=" h-auto py-6 mx-4">
    <div className=" h-3/4 md:h-1/2 w-full  relative max-w-sm">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-primary to-secondary transform scale-[0.80] bg-red-500 rounded-full blur-2xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="flex items-center justify-between w-full px-4">
        <div className=" rounded-full border-2   border-primary overflow-hidden">
          <Image src="/img/jordan.jpg" width={50} height={50} alt="logo" />
        </div>
        <FaArrowRight className="size-7" />

        <div className=" rounded-full border-2  border-secondary overflow-hidden">
          <Image src="/img/glen.jpg" width={50} height={50} alt="logo" />
        </div>
        </div>
        <p className="font-normal text-md text-slate-300  mt-2 relative z-50 text leading-7 mb-4">
          Una vez hicimos un compartir por su cumpleaños en el salón
        </p>

        <button className="border px-4 py-1 rounded-lg !text-sm  border-gray-500 text-gray-300">
          Ver más &rarr;
        </button>
      </div>
    </div>
  </div> */}
    </>
  );
}

export default CardCommentFast;
