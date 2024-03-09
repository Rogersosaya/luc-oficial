import { Tab, Tabs } from "@nextui-org/react";
import classNames from "classnames";
import React, { useState } from "react";
import {
  AiFillFire,
  AiOutlineFire,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoBook, IoBookOutline } from "react-icons/io5";
function ModalValorationBody() {
  const [rating, setRating] = useState(1);
  const [difficulty, setDifficulty] = useState(1);
  const [learning, setLearning] = useState(1);
  const [repeat, setRepeat] = useState(true);
  const [tags, setTags] = useState([])
  const array = [...Array(5)];
  return (
    <>
      <div className="mb-3">
        <div className="text-sm font-bold">Valoración General</div>
        <div className="flex  items-center">
          {array.map((_, index) => {
            const currentRating = index + 1;
            return (
              <FaStar
                key={index}
                onClick={() => setRating(currentRating)}
                className="cursor-pointer"
                size={20}
                color={currentRating <= rating ? "yellow" : ""}
              />
            );
          })}

          <span className="ml-2 text-lg">{rating}</span>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-sm font-bold">Dificultad</div>
        <div className="flex  items-center ">
          {array.map((_, index) => {
            const currentDifficulty = index + 1;
            return (
              <AiFillFire
                key={index}
                onClick={() => setDifficulty(currentDifficulty)}
                className="cursor-pointer"
                size={20}
                color={currentDifficulty <= difficulty ? "red" : ""}
              />
            );
          })}
          <span className="ml-2 text-lg">{difficulty}</span>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-sm font-bold">Aprendizaje</div>
        <div className="flex  items-center">
          {array.map((_, index) => {
            const currentLearning = index + 1;
            return (
              <IoBook
                key={index}
                onClick={() => setLearning(currentLearning)}
                className="cursor-pointer"
                size={20}
                color={currentLearning <= learning ? "blue" : ""}
              />
            );
          })}

          <span className="ml-2 text-lg">{learning}</span>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-sm font-bold">¿Lo volverías a llevar?</div>
        <div className="flex">
          <AiOutlineLike
            className="cursor-pointer"
            onClick={() => setRepeat(true)}
            size={30}
            color={repeat ? "green" : ""}
          />
          <AiOutlineDislike
            className="cursor-pointer ml-4"
            onClick={() => setRepeat(false)}
            size={30}
            color={!repeat ? "red" : ""}
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="text-sm font-bold">Etiquetas</div>
        <div className="flex">
        <div className={classNames("bg-secondary rounded-lg text-slate-950 px-2 py-1 font-bold mr-2  mb-2 text-base flex items-center cursor-pointer", false ? "bg-secondary" : "bg-slate-400 opacity-50")}>
          Ponderable 
        </div>

        </div>
        </div>
    </>
  );
}

export default ModalValorationBody;
