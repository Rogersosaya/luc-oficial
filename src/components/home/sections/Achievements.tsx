"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);


interface Props{
  teachersTotal: number,
  commentsTotal: number,
  valorationsTotal: number,
  usersTotal: number,
}
const Achievements = ({teachersTotal, commentsTotal, valorationsTotal, usersTotal}: Props) => {
  const achievementsList = [
  
    {
      
      metric: "Usuarios",
      value: usersTotal,
    },
    {
      metric: "Comentarios",
      value: commentsTotal,
      
    },
    {
      metric: "Valoraciones",
      value: valorationsTotal,
    },
    {
      metric: "Profesores",
      value: teachersTotal,
    },
  ];
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                
                
                <AnimatedNumbers
                  includeComma
                  className="text-white text-4xl font-bold"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 2,
                  })}
                  animateToNumber={(achievement.value)}
                  
                />
                
              </h2>
              <p className="text-[#ADB7BE] text-xl">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
