import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FaLinkedinIn } from "react-icons/fa";

import Resenia from "../components/Resenia";
import Valuation from "../components/Valuation";
import Tags from "../components/Tags";
import { IoIosContact } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import ButtonAddValoration from "../components/ButtonAddValoration";
import { getValorationsByTeacher } from "@/actions/valoration/get-valorations";
interface PropsTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
}
interface Props {
  teacher: PropsTeacher | null;
}
function GridPerfil({ teacher }: Props) {
  
  return (
    <>
      <div className="grid grid-cols-12    text-white gap-4 px-1 md:px-11 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="col-span-12 md:col-span-3 flex flex-col rounded-lg">
          <div className="border-slate-500 border px-2 py-3 flex justify-center rounded-lg">
            <Image
              src={`/teachers/${teacher?.url}`}
              width={280}
              height={280}
              alt="foto"
              className="rounded-lg border"
            />
          </div>
          <div className="border-slate-500 border px-4 py-3 rounded-lg my-2 text-center ">
            <ButtonAddValoration />
          </div>
          <div className="border-slate-500 border px-4 py-3 rounded-lg my-2">
            <div className="text-md font-bold mb-2 flex items-center">
              <IoIosContact className="mr-2 text-secondary" />
              Contacto
            </div>
            <div className="flex  flex-wrap">
              <Button size="lg" className="bg-blue-900 text-sm mr-4">
                Linked
                <FaLinkedinIn className="bg-white text-blue-900 -ml-1" />
              </Button>
              <Button size="lg" className="bg-red-600 text-sm">
                <svg
                  className="-mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="6769YB8EDCGhMGPdL9zwWa_ho8QlOYvMuG3_gr1"
                    x1="15.072"
                    x2="24.111"
                    y1="13.624"
                    y2="24.129"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#e3e3e3"></stop>
                    <stop offset="1" stopColor="#e2e2e2"></stop>
                  </linearGradient>
                  <path
                    fill="url(#6769YB8EDCGhMGPdL9zwWa_ho8QlOYvMuG3_gr1)"
                    d="M42.485,40H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"
                  ></path>
                  <linearGradient
                    id="6769YB8EDCGhMGPdL9zwWb_ho8QlOYvMuG3_gr2"
                    x1="26.453"
                    x2="36.17"
                    y1="25.441"
                    y2="37.643"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#f5f5f5"></stop>
                    <stop offset=".03" stopColor="#eee"></stop>
                    <stop offset="1" stopColor="#eee"></stop>
                  </linearGradient>
                  <path
                    fill="url(#6769YB8EDCGhMGPdL9zwWb_ho8QlOYvMuG3_gr2)"
                    d="M42.485,40H8l37-29v26.485C45,38.874,43.874,40,42.485,40z"
                  ></path>
                  <linearGradient
                    id="6769YB8EDCGhMGPdL9zwWc_ho8QlOYvMuG3_gr3"
                    x1="3"
                    x2="45"
                    y1="24"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#d74a39"></stop>
                    <stop offset="1" stopColor="#c73d28"></stop>
                  </linearGradient>
                  <path
                    fill="url(#6769YB8EDCGhMGPdL9zwWc_ho8QlOYvMuG3_gr3)"
                    d="M5.515,8H8v32H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8z M42.485,8	H40v32h2.485C43.874,40,45,38.874,45,37.485V10.515C45,9.126,43.874,8,42.485,8z"
                  ></path>
                  <linearGradient
                    id="6769YB8EDCGhMGPdL9zwWd_ho8QlOYvMuG3_gr4"
                    x1="24"
                    x2="24"
                    y1="8"
                    y2="38.181"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopOpacity=".15"></stop>
                    <stop offset="1" stopOpacity=".03"></stop>
                  </linearGradient>
                  <path
                    fill="url(#6769YB8EDCGhMGPdL9zwWd_ho8QlOYvMuG3_gr4)"
                    d="M42.485,40H30.515L3,11.485v-0.969C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"
                  ></path>
                  <linearGradient
                    id="6769YB8EDCGhMGPdL9zwWe_ho8QlOYvMuG3_gr5"
                    x1="3"
                    x2="45"
                    y1="17.73"
                    y2="17.73"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#f5f5f5"></stop>
                    <stop offset="1" stopColor="#f5f5f5"></stop>
                  </linearGradient>
                  <path
                    fill="url(#6769YB8EDCGhMGPdL9zwWe_ho8QlOYvMuG3_gr5)"
                    d="M43.822,13.101L24,27.459L4.178,13.101C3.438,12.565,3,11.707,3,10.793v-0.278	C3,9.126,4.126,8,5.515,8h36.969C43.874,8,45,9.126,45,10.515v0.278C45,11.707,44.562,12.565,43.822,13.101z"
                  ></path>
                  <linearGradient
                    id="6769YB8EDCGhMGPdL9zwWf_ho8QlOYvMuG3_gr6"
                    x1="24"
                    x2="24"
                    y1="8.446"
                    y2="27.811"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#e05141"></stop>
                    <stop offset="1" stopColor="#de4735"></stop>
                  </linearGradient>
                  <path
                    fill="url(#6769YB8EDCGhMGPdL9zwWf_ho8QlOYvMuG3_gr6)"
                    d="M42.485,8h-0.3L24,21.172L5.815,8h-0.3C4.126,8,3,9.126,3,10.515v0.278	c0,0.914,0.438,1.772,1.178,2.308L24,27.459l19.822-14.358C44.562,12.565,45,11.707,45,10.793v-0.278C45,9.126,43.874,8,42.485,8z"
                  ></path>
                </svg>
                Gmail
              </Button>
            </div>
          </div>
          <div className="border-slate-500 border px-4 py-3 flex-auto rounded-lg">
            <div className="text-md font-bold mb-2 flex items-center">
              <CiCircleMore className="mr-2 text-secondary" />
              Otros cursos
            </div>
            <div className="flex flex-wrap ">
              <div className="bg-primary rounded-lg  px-2 py-1 font-bold mr-2  mb-2 text-base flex items-center">
                MCD
              </div>
              <div className="bg-primary rounded-lg  px-2 py-1 font-bold mr-2  mb-2 text-base flex items-center">
                MCD
              </div>
              <div className="bg-primary rounded-lg  px-2 py-1 font-bold mr-2  mb-2 text-base flex items-center">
                MCD
              </div>
              <div className="bg-primary rounded-lg  px-2 py-1 font-bold mr-2  mb-2 text-base flex items-center">
                MCD
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12  md:col-span-9 flex flex-col">
          <div className="border-slate-500 border text-center px-2 py-3 rounded-lg">
            <Valuation teacher={teacher} />
          </div>
          <div className="border-slate-500 border px-4 py-3 rounded-lg my-2">
            <Resenia teacher={teacher} />
          </div>
          <div className="border-slate-500 border px-4 py-3 rounded-lg flex-auto">
            <Tags teacher={teacher} />
          </div>
        </div>
      </div>
    </>
  );
}

export default GridPerfil;
