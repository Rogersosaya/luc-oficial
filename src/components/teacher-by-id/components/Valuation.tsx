import { Progress } from "@nextui-org/react";
import React from "react";
import { FaRegStar, FaStar, FaUser } from "react-icons/fa6";

function Valuation() {
  const value = 50;
  return (
    <>
      <div className="text-lg font-bold">RODRIGUEZ-RAFAEL-GLEN DARIO</div>
      <div className="grid grid-cols-12 w-full">
        <div className="p-3 flex flex-col items-center justify-center col-span-5">
          <div className="text-lg ">Valoración</div>
          <div className="text-2xl font-bold">4.5</div>
          <div className="flex">
            <FaStar size={14} />
            <FaStar size={14} />
            <FaStar size={14} />
            <FaStar size={14} />
            <FaRegStar size={14} />
          </div>
          <div className="flex justify-center mt-3 items-center">
            <FaUser size={14} />
            <span className="ml-2 text-lg">110</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full col-span-7 px-2 md:px-10">
          <div className="flex items-center w-full">
            <span className="text-md mr-1">5</span>
            <FaStar size={20} />
            <Progress
              className="ml-1 mr-2"
              size="md"
              radius="sm"
              aria-label="1"
              classNames={{
                base: "w-full",

                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
              value={value}
            />
            <span className="text-md">%{value}</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-md mr-1">5</span>
            <FaStar size={20} />
            <Progress
              className="ml-1 mr-2"
              size="md"
              radius="sm"
              aria-label="1"
              classNames={{
                base: "w-full",

                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
              value={value}
            />
            <span className="text-md">%{value}</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-md mr-1">5</span>
            <FaStar size={20} />
            <Progress
              className="ml-1 mr-2"
              size="md"
              radius="sm"
              aria-label="1"
              classNames={{
                base: "w-full",

                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
              value={value}
            />
            <span className="text-md">%{value}</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-md mr-1">5</span>
            <FaStar size={20} />
            <Progress
              className="ml-1 mr-2"
              size="md"
              radius="sm"
              aria-label="1"
              classNames={{
                base: "w-full",

                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
              value={value}
            />
            <span className="text-md">%{value}</span>
          </div>
          <div className="flex items-center w-full">
            <span className="text-md mr-1">5</span>
            <FaStar size={20} />
            <Progress
              className="ml-1 mr-2"
              size="md"
              radius="sm"
              aria-label="1"
              classNames={{
                base: "w-full",

                indicator: "bg-gradient-to-r from-primary to-secondary",
              }}
              value={value}
            />
            <span className="text-md">%{value}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Valuation;
