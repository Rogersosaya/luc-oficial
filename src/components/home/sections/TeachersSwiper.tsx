"use client";
import React from "react";
import CardTeachers from "../../ui/CardTeachers";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Button } from '@nextui-org/react';
import Link from "next/link";

import Line from "@/components/ui/line/Line";
import { Course } from "@/interfaces/course.interface";

interface Valoration {
  rating:number,
  difficulty: number,
  learning: number,
  repeat: boolean,

}

interface Teacher {
  name: string,
  slug:string,
  url:string,
  valorations: Valoration[];
  courses: Course[];
}
interface Props {
  teachers: Teacher[]
}

function TeachersSwiper({teachers}: Props) {
  return (

    <div className="my-96">
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Profesores
          <br className="hidden md:inline-block" /> 
        </h2>
        <Line/>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          Por el momento se han registrado un total de 162 profesores de la Facultad de Ingeniería Industrial, Sistemas y Software.  
        </p>
      </div>
      <div className="text-center">
      <Link href="/teachers" >
      <Button color="primary" size="lg" className=" text-lg px-6 py-6 font-bold bg-gradient-to-r to-primary from-secondary">Ver todos</Button>
      </Link>
      </div>
      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={70}
        
        slidesPerView={4}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          // when window width is >= 640px
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide className="px-4 py-10 text-center" key={teacher.slug}>
            <CardTeachers teacher={teacher} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TeachersSwiper;
