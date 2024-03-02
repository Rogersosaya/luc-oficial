"use client";
import { BannerElement } from "@/components/home/components/BannerElement";
import { BannerSubtitle } from "@/components/home/components/BannerSubtitle";
import { BannerTitle } from "@/components/home/components/BannerTitle";
import { Button, Highlight } from "@/components/ui/button/Button";
import { BiSearch } from "react-icons/bi";

import { FaSearch } from "react-icons/fa";
import { Select, SelectItem } from "@nextui-org/react";
import { SearchBarInput } from "../components/Search";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { RxCrossCircled } from "react-icons/rx";

function BannerTeachers() {
  // const inputRef = useRef<HTMLInputElement>(null);
  // useSlashFocus(inputRef);

  
  return (
    <BannerElement>
      <BannerTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Profesores
        <br className="hidden md:block" />
        de la UNI
      </BannerTitle>
      <BannerSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Selecciona el profesor que desees
        <br className="hidden md:block" />
      </BannerSubtitle>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 px-4 [--animation-delay:600ms] h-12 w-[50rem] mx-auto rounded-full bg-slate-800 text-sm pl-8 ">
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 left-0 text-xl p-3"
          // onClick={() => setShowPassword(!showPassword)}
        >
          <BiSearch className="cursor-auto	" />
        </button>
        <input
          placeholder="Buscar..."
          className="h-full bg-transparent w-full outline-none px-4 text-sm"
        />
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-1 text-xl p-3"
          // onClick={() => setShowPassword(!showPassword)}
        >
          <RxCrossCircled />
        </button>
      </div>
      
      {/* <div className="bg-zinc-300  rounded-full  mt-13">
        <Select label="Select an animal" className="max-w-xs">
          
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
          
        </Select>
      </div> */}

      {/* <BannerImage /> */}
    </BannerElement>
  );
}

export default BannerTeachers;
