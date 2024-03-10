import { useTeacherStore } from "@/store/teacherStore";
import { useValorationValuesStore } from "@/store/valorationValuesStore";
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
  const {teacherId} = useTeacherStore()
  const{rating, setRating,difficulty, setDifficulty,learning, setLearning,repeat, setRepeat,tags, setTags} =  useValorationValuesStore()

  const array = [...Array(5)];
  const toggleTag = (tag: string) => {
    if (tags.includes(tag)) {
      // Si la etiqueta ya está en el array, la eliminamos
      setTags(tags.filter((t) => t !== tag));
    } else {
      // Si la etiqueta no está en el array, la agregamos
      setTags([...tags, tag]);
    }
  };
  const tagsData = [
    "Prepárate para leer",
    "Tiene vocación por el curso",
    "Invita a participar",
    "Zzzzzzz",
    "Trabajos grupales",
    "Learn English",
    "Exposiciones",
    "Muchas tareas",
    "Se aprueba pero no se pondera",
    "Da puntos extras",
    "Ponderable",
    "Pruebas pesadas, pedirás otro cuadernillo",
    "Grosero",
    "Muy exigente",
    "Desorganizado",
    "Llega tarde a las clases",
    "Buena onda",
    "Te cuenta su vida",
    "Es importante que asistas a sus clases",
  ];
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
        <div className="text-sm font-bold mb-2">Etiquetas</div>
        <div className="flex flex-wrap">
          {tagsData.map((tagName) => {
            return (
              <div
                className={`bg-secondary rounded-lg text-slate-950 px-2 py-1 font-bold mr-2 mb-2 text-base flex items-center cursor-pointer select-none ${
                  tags.includes(tagName)
                    ? "bg-secondary"
                    : "bg-slate-400 opacity-50"
                }`}
                onClick={() => toggleTag(tagName)}
              >
                {tagName}
              </div>
            );
          })}

         
        </div>
      </div>
    </>
  );
}

export default ModalValorationBody;
