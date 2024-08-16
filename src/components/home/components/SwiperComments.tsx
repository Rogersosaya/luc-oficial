"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay,Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CardCommentFast from "./CardCommentFast";
interface User {
  image: string | null;
}
interface Teacher {
  name: string;
  url: string;
}
interface Comment {
  id: string;
  value: string;
  occult: boolean;
  user: User;
  teacher: Teacher;
}
interface Props {
  commentsRecent: Comment[];
}

function SwiperComments({ commentsRecent }: Props) {
  return (
    <Swiper
      slidesPerView={4.5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay,Pagination]}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2.5,
        },
        960: {
          slidesPerView: 3.5,
        },
        // when window width is >= 640px
        1280: {
          slidesPerView: 4.5,
        },
      }}
      className="mySwiper "
    >
      {commentsRecent.map((comment, index) => (
        <SwiperSlide key={index} className="h-full">
            <CardCommentFast key={comment.id} comment={comment} />
        </SwiperSlide>
      ))}

      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
  );
}

export default SwiperComments;
