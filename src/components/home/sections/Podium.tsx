import Image from "next/image";
import React from "react";

import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { getTopTeachers } from "@/actions/teacher/get-top-teachers";
import Container from "@/components/container/Container";
import Line from "@/components/ui/line/Line";

async function Podium() {
  const topTeachers = await getTopTeachers();
  const top1 = topTeachers[0];
  const top2 = topTeachers[1];
  const top3 = topTeachers[2];
  const array = [...Array(5)];
  return (
    <>
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
            Los mejores profesores
            <br className="hidden md:inline-block" />
          </h2>

          <Line />
          <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
            Estos son los 3 mejores profesores según las valoraciones hechas por
            los alumnos, este podio se armó promediando el puntaje de la
            valoración general, sólo se tienen en cuenta profesores que cuenten
            con más de 7 valoraciones
          </p>
        </div>

        <div className="mb-12 ">
          <FaCrown className="mx-auto text-yellow-400  text-6xl md:text-8xl" />
          <div className="flex justify-center">
            <div className="text-center mt-16  md:-mr-9 flex flex-col items-center">
              <div className="relative ">
                <div className="rounded-full overflow-hidden border-5 border-primary relative text-center h-56 md:h-96 w-56 md:w-96">
                  <Image
                    src="/teacher.png"
                    alt="imagen"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="rounded-full absolute text-3xl bg-primary text-white bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-10 h-10 text-center font-bold">
                  2
                </div>
              </div>
              <div className="mt-6 font-normal text-sm  md:text-xl text-slate-300 relative z-50 text leading-7 md:leading-10 mb-4 w-36  md:w-80 text-center">
                {top2 ? <>{top2.name}</> : <>*********</>}
              </div>
              <div className="flex justify-center items-center">
                {
                  top2 ?<>{array.map((_, index) => {
                    const currentRating = index + 1;
  
                    return (
                      <FaStar
                        className={
                          currentRating <= top2.averageRating ? "text-danger" : ""
                        }
                        key={index}
                        size={18}
                      />
                    );
                  })}</> : <>*********</>
                }
                
                {
                  top2 &&  <span className="ml-2 text-lg">{top2.averageRating}</span>
                }
               
              </div>
              <div className="flex justify-center mt-3 items-center">
                <FaUser size={20} />
                {
                  top2 && <span className="ml-2 text-lg">{top2.valorations.length}</span>
                }
                
              </div>
            </div>
            <div className="text-center z-10 flex flex-col items-center">
              <div className="relative">
                <div className="rounded-full overflow-hidden border-5 border-yellow-400 relative text-center h-56 md:h-96 w-56 md:w-96">
                  <Image
                    src="/teacher.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="rounded-full absolute text-3xl bg-yellow-400  text-white bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-10 h-10 text-center font-bold">
                  1
                </div>
              </div>
              <div className="mt-6 font-normal text-sm  md:text-xl text-slate-300 relative z-50 text leading-7 md:leading-10 mb-4 w-36  md:w-80  text-center">
              {top1 ? <>{top1.name}</> : <>*********</>}
              </div>
              <div className="flex justify-center items-center">
              {
                  top1 ?<>{array.map((_, index) => {
                    const currentRating = index + 1;
                    return (
                      <FaStar
                        className={
                          currentRating <= top1.averageRating ? "text-danger" : ""
                        }
                        key={index}
                        size={18}
                      />
                    );
                  })}</> : <>*********</>
                }
                {
                  top1 &&  <span className="ml-2 text-lg">{top1.averageRating}</span>
                }
                
              </div>
              <div className="flex justify-center mt-3 items-center">
                <FaUser size={20} />
                {
                  top1 && <span className="ml-2 text-lg">{top1.valorations.length}</span>
                }
                
              </div>
            </div>
            <div className="text-center mt-28  md:-ml-9 flex flex-col items-center">
              <div className="relative">
                <div className="rounded-full overflow-hidden border-5 border-secondary relative text-center h-56 md:h-96 w-56 md:w-96">
                  <Image
                    src="/teacher.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="rounded-full absolute text-3xl bg-secondary text-white bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-10 h-10 text-center font-bold">
                  3
                </div>
              </div>
              <div className="mt-6 font-normal text-sm  md:text-xl text-slate-300 relative z-50 text leading-7 md:leading-10 mb-4 w-36  md:w-80 text-center">
              {top3 ? <>{top3.name}</> : <>*********</>}
              </div>
              <div className="flex justify-center items-center">
              {
                  top3 ?<>{array.map((_, index) => {
                    const currentRating = index + 1;
                    return (
                      <FaStar
                        className={
                          currentRating <= top3.averageRating ? "text-danger" : ""
                        }
                        key={index}
                        size={18}
                      />
                    );
                  })}</> : <>*********</>
                }
                {
                  top3 &&  <span className="ml-2 text-lg">{top3.averageRating}</span>
                }
                
              </div>
              <div className="flex justify-center mt-3 items-center">
                <FaUser size={20} />
                {
                  top3 && <span className="ml-2 text-lg">{top3.valorations.length}</span>
                }
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Podium;
