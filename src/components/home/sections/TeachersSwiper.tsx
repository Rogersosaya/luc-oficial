"use client";
import React from "react";
import CardTeachers from "../components/CardTeachers";
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
const teachers = [
  {
    url: "/img/glen.jpg",
  },
  {
    url: "/img/glen.jpg",
  },
  {
    url: "/img/glen.jpg",
  },
  {
    url: "/img/glen.jpg",
  },
  {
    url: "/img/glen.jpg",
  },
  {
    url: "/img/glen.jpg",
  },
  {
    url: "/img/glen.jpg",
  },
  {
    url: "/img/glen.jpg",
  },
];

function TeachersSwiper() {
  return (
    <div className="my-36 ">
      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={70}
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
            <CardTeachers />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TeachersSwiper;
