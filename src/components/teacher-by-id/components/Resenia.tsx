import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Velocimeter from "./Velocimeter";
import { MdReviews } from "react-icons/md";

function Resenia() {
  return (
    <>
      <div className="text-md font-bold mb-2 flex items-center">
              <MdReviews className="mr-2 text-secondary" />
              Reseña de estudiantes
            </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <Velocimeter />
          <div className="text-sm mt-2">Dificultad</div>
        </div>
        <div className="flex flex-col items-center">
          <Velocimeter />
          <div className="text-sm mt-2">Aprendizaje</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex">
            <div className="flex flex-col items-center">
              <div>
                <AiOutlineLike size={100} color="green" />
              </div>
              <div className="text-xl">80%</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <AiOutlineDislike
                  size={100}
                  color="red"
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
              <div className="text-xl">80%</div>
            </div>
          </div>
          <div className="text-lg">¿Lo volvería a llevar?</div>
        </div>
      </div>
    </>
  );
}

export default Resenia;
