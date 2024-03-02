import Container from "@/components/container/Container";
import React from "react";
import Banner from "../../components/home/sections/Banner";
import Achievements from "@/components/home/sections/Achievements";
import CommentsFast from "../../components/home/sections/CommentsFast";
import Podium from "../../components/home/sections/Podium";
import TeachersSwiper from "@/components/home/sections/TeachersSwiper";
import Filters from '../../components/teachers/sections/Filters';

function GeneralPage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <Banner />
        </Container>
      </div>
      <Container>
        <Achievements />
      </Container>
      <Container>
        <CommentsFast />
      </Container>
      <Container>
        <Podium />
      </Container>
      <Container>
        <TeachersSwiper />
      </Container>
      
      <div className="h-12 bg-blue-600">ultimo</div>
    </>
  );
}

export default GeneralPage;
