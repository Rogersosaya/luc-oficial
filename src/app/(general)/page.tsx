import Container from "@/components/container/Container";
import React from "react";
import Banner from "../../components/home/sections/Banner";
import Achievements from "@/components/home/sections/Achievements";
import CommentsFast from "../../components/home/sections/CommentsFast";
import Podium from "../../components/home/sections/Podium";
import TeachersSwiper from "@/components/home/sections/TeachersSwiper";

import { getTotal } from "../../actions/total/get-info-total";
import { getTeachersRecent } from "@/actions/teacher/get-teachers-recent";

async function GeneralPage() {
  const teachers = await getTeachersRecent();
  const { teachersTotal, commentsTotal, valorationsTotal, usersTotal } =
    await getTotal();
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[19.6rem]">
        <Container className="pt-[6.4rem]">
          <Banner />
        </Container>
      </div>
      <Container>
        <Achievements
          teachersTotal={teachersTotal!}
          commentsTotal={commentsTotal!}
          valorationsTotal={valorationsTotal!}
          usersTotal={usersTotal!}
        />
      </Container>
      <CommentsFast />
      <Podium />
      <Container>
        <TeachersSwiper teachers={teachers} />
      </Container>
    </>
  );
}

export default GeneralPage;
