import React from "react";
import { BannerElement } from "../components/BannerElement";
import { BannerSubtitle } from "../components/BannerSubtitle";
import { BannerTitle } from "../components/BannerTitle";
import { Button, Highlight } from "../../ui/button/Button";
import BannerImage from "../components/BannerImage";

function Banner() {
  return (
    <BannerElement>
      <Button
        className="translate-y-[-1rem] animate-fade-in opacity-0"
        href="/"
        variant="secondary"
        size="small"
      >
        <span>Linear 2022 Release – Built for scale</span>{" "}
        <Highlight>→</Highlight>
      </Button>
      <BannerTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        LUC brinda un espacio
        <br className="hidden md:block" />al estudiante para expresarse con libertad y respeto
      </BannerTitle>
      <BannerSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Ayúdanos a crear una comunidad educativa donde los estudiantes 
        <br className="hidden md:block" /> puedan compartir sus experiencias, encontrar inspiración
      </BannerSubtitle>
      <Button
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
        href="/"
        variant="primary"
        size="large"
      >
        <span>Empezar </span>
        <Highlight>{"->"}</Highlight>
      </Button>
      {/* <BannerImage /> */}
    </BannerElement>
  );
}

export default Banner;
