import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import {
  AiFillFire,
  AiOutlineFire,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoBook, IoBookOutline } from "react-icons/io5";
function ModalValorationBody() {
  return (
    <>
      <div className="mb-3">
        <div className="text-sm font-bold">Valoración General</div>
        <div className="flex  items-center">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaRegStar size={20} />
          <span className="ml-2 text-lg">4.5</span>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-sm font-bold">Dificultad</div>
        <div className="flex  items-center ">
          <AiFillFire size={20} />
          <AiFillFire size={20} />
          <AiFillFire size={20} />
          <AiFillFire size={20} />
          <AiOutlineFire size={20} />
          <span className="ml-2 text-lg">4.5</span>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-sm font-bold">Aprendizaje</div>
        <div className="flex  items-center">
          <IoBook size={20} />
          <IoBook size={20} />
          <IoBook size={20} />
          <IoBook size={20} />
          <IoBookOutline size={20} />
          <span className="ml-2 text-lg">4.5</span>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-sm font-bold">¿Lo volverías a llevar?</div>
        <div className="flex">
          <AiOutlineLike size={30} /> <AiOutlineDislike className="ml-7" size={30} />
        </div>
      </div>
    </>
  );
}

export default ModalValorationBody;
