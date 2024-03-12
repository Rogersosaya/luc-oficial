"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FaRegUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineStarRate } from "react-icons/md";

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
      icon:<FaRegUser size={24} className="mr-4 text-secondary"/>,
      metric: "Usuarios",
      value: usersTotal,
    },
    {
      icon:<FaComments size={24} className="mr-4 text-secondary"/>,
      metric: "Comentarios",
      value: commentsTotal,
      
    },
    
    {
      icon:<MdOutlineStarRate size={24} className="mr-4 text-secondary"/>,
      metric: "Valoraciones",
      value: valorationsTotal,
    },
    {
      icon:<GiTeacher size={24} className="mr-4 text-secondary"/>,
      metric: "Profesores",
      value: teachersTotal,
    },
  ];
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="box py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
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
              <div className="flex items-center mt-3">
                {achievement.icon}
              <p className="text-white text-xl">  {achievement.metric}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
