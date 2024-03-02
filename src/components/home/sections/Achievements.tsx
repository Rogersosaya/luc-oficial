"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  
  {
    
    metric: "Usuarios",
    value: "100,000",
  },
  {
    metric: "Comentarios",
    value: "100",
    
  },
  {
    metric: "Valoraciones",
    value: "7",
  },
  {
    metric: "Profesores",
    value: "5",
  },
];

const Achievements = () => {
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
                
                {/* <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                /> */}
                <AnimatedNumbers
                  includeComma
                  className="text-white text-4xl font-bold"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 2,
                  })}
                  animateToNumber={parseInt(achievement.value)}
                  
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
