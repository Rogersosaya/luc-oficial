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
import { Teacher } from "@/interfaces/teacher.interface";
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
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          Por el momento se han registrado un total de 340 profesores de la Facultad de Ingeniería Industrial, Sistemas y Software.  
        </p>
      </div>
      <div className="text-center">
      <Link href="/teachers" >
      <Button color="primary" size="lg" className=" mx-auto text-xl font-bold py-6">Ver todos</Button>
      </Link>
      </div>
      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={70}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 1500,
        // }}

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
          <SwiperSlide className="px-4 py-10" key={index}>
            <CardTeachers teacher={teacher} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TeachersSwiper;
