"use client";
import { BannerElement } from "@/components/home/components/BannerElement";
import { BannerSubtitle } from "@/components/home/components/BannerSubtitle";
import { BannerTitle } from "@/components/home/components/BannerTitle";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

import { BiSearch } from "react-icons/bi";

import { RxCrossCircled } from "react-icons/rx";

function BannerTeachers() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((termSearch?: string)=> {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    if (termSearch) {
      params.set("query", termSearch);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <BannerElement>
      <BannerTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Profesores
        <br className="block" />
        de la UNI
      </BannerTitle>
      <BannerSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Profesores y cursos de la FIIS registrados de la última carga horaria
        <br className="hidden md:block" />
      </BannerSubtitle>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 px-4 [--animation-delay:600ms] h-12 md:w-[50rem] mx-auto rounded-full bg-zinc-800 text-sm pl-8 ">
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 left-0 text-xl p-3"
        >
          <BiSearch className="cursor-auto	" />
        </button>
        <input
          placeholder="Buscar Profesor..."
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
          className="h-full bg-transparent w-full  px-4 text-sm outline-none"
        />
        
      </div>
    </BannerElement>
  );
}

export default BannerTeachers;
