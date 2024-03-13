import React from "react";
import { BannerElement } from "../components/BannerElement";
import { BannerSubtitle } from "../components/BannerSubtitle";
import { BannerTitle } from "../components/BannerTitle";
import Link from "next/link";
import { Button } from "@nextui-org/react";

function Banner() {
  return (
    <BannerElement>
      
      <BannerTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        LUC brinda un espacio 
         al estudiante para expresarse libremente y con respeto.
      </BannerTitle>
      <BannerSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Ayúdanos a crear una comunidad educativa donde los estudiantes
        <br className="hidden md:block" /> puedan compartir sus opiniones
      </BannerSubtitle>
      <Link href={"/teachers"}>
        
        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] text-lg px-6 py-6 font-bold "
          color="primary" size="lg"
        >
          Empezar
          
        </Button>
      </Link>
    </BannerElement>
  );
}

export default Banner;
