"use client";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

function Filters() {
  const animals = [
    {
      value: "tigre",
      label: "tigre",
    },
    {
      value: "foca",
      label: "foca",
    },
    {
      value: "leon",
      label: "leon",
    },
  ];
  return (
    <>
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] flex mx-9 flex-wrap md:flex-nowrap gap-4 bg-gray-900 py-3 px-3 justify-center mt-5 rounded-lg md:rounded-full">
        <Select
          size={"sm"}
          color={"primary"}
          label="FACULTAD"
          className="w-full  md:max-w-xs "
        >
          {animals.map((animal, index) => (
            <SelectItem className="text-2xl"  key={index} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          size={"sm"}
          color={"primary"}
          label="CARRERA"
          className="w-full  md:max-w-xs "
        >
          {animals.map((animal, index) => (
            <SelectItem color={"primary"} key={index} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          size={"sm"}
          color={"primary"}
          label="CICLO"
          className="w-full  md:max-w-xs "
        >
          {animals.map((animal, index) => (
            <SelectItem color={"primary"} key={index} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          size={"sm"}
          color={"primary"}
          label="CURSO"
          className="w-full  md:max-w-xs"
        >
          {animals.map((animal, index) => (
            <SelectItem color={"primary"} key={index} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </>
  );
}

export default Filters;
