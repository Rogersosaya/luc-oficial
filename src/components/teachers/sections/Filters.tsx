'use client'
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
      <div className="flex mx-9 flex-wrap md:flex-nowrap gap-4 bg-slate-800 py-3 px-3 justify-center mt-5 rounded-full">
        <Select size={"sm"} color={"primary"}
 label="FACULTAD" className="max-w-xs ">
          {animals.map((animal, index) => (
            <SelectItem  color={"primary"} key={index} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Select size={"sm"} color={"primary"}
 label="CARRERA" className="max-w-xs ">
          {animals.map((animal, index) => (
            <SelectItem color={"primary"} key={index} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Select size={"sm"} color={"primary"}
 label="CICLO" className="max-w-xs ">
          {animals.map((animal, index) => (
            <SelectItem color={"primary"} key={index} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Select size={"sm"} color={"primary"}
 label="CURSO" className="max-w-xs ">
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
