"use client";
import React, { useEffect } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Velocimeter from "./Velocimeter";
import { MdReviews } from "react-icons/md";
import { useValorationsStore } from "@/store/valorationsStore";
interface PropsTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
}
interface Props {
  teacher: PropsTeacher | null;
}
function Resenia({ teacher }: Props) {
  const { getValorations, valorations } = useValorationsStore();
  useEffect(() => {
    getValorations(teacher!.id);
  }, []);
  const difficulties = valorations.map((item) => item.difficulty);
  const learnings = valorations.map((item) => item.learning);
  let averageDifficulty =
  Number((difficulties.reduce((acc, val) => acc + val, 0) / difficulties.length).toFixed(1));
  let averageLearning =
    Number((learnings.reduce((acc, val) => acc + val, 0) / learnings.length).toFixed(1));
    
  averageDifficulty = Number.isNaN(averageDifficulty) ? 1 : averageDifficulty;
  averageLearning = (Number.isNaN(averageLearning) ? 1 : averageLearning);

  const rapeats = valorations.map((item) => item.repeat);
  let falsesPercentage = Number(((rapeats.filter((rapeat) => rapeat === false).length / rapeats.length) * 100).toFixed(1));
  let truesPercentage = Number(((rapeats.filter((rapeat) => rapeat === true).length / rapeats.length) * 100).toFixed(1));
  falsesPercentage = (Number.isNaN(falsesPercentage) ? 0 : falsesPercentage);
  truesPercentage = (Number.isNaN(truesPercentage) ? 0 : truesPercentage);
  return (
    <>
      <div className="text-md font-bold mb-2 flex items-center">
        <MdReviews className="mr-2 text-secondary" />
        Reseña de estudiantes
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <Velocimeter value={averageDifficulty} />
          <div className="text-sm mt-2">Dificultad </div>
        </div>
        <div className="flex flex-col items-center">
          <Velocimeter value={averageLearning} />
          <div className="text-sm mt-2">Aprendizaje</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex">
            <div className="flex flex-col items-center">
              <div>
                <AiOutlineLike size={100} className="text-secondary" />
              </div>
              <div className="text-xl">{truesPercentage}%</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <AiOutlineDislike
                  size={100}
                  className="text-danger"
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
              <div className="text-xl">{falsesPercentage}%</div>
            </div>
          </div>
          <div className="text-lg">¿Lo volvería a llevar?</div>
        </div>
      </div>
    </>
  );
}

export default Resenia;
