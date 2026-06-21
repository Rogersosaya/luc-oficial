import Banner from "@/components/home/sections/Banner";
import Achievements from "@/components/home/sections/Achievements";
import TeachersSwiper from "@/components/home/sections/TeachersSwiper";
import Podium from "@/components/home/sections/Podium";
import { HowItWorks } from "@/components/home/sections/HowItWorks";
import CommentsFast from "@/components/home/sections/CommentsFast";

import { getTotal } from "@/actions/total/get-info-total";
import { getTeachersRecent } from "@/actions/teacher/get-teachers-recent";

export const revalidate = 300;

async function GeneralPage() {
  const [teachers, { teachersTotal, commentsTotal, valorationsTotal, usersTotal }] =
    await Promise.all([getTeachersRecent(8), getTotal()]);

  return (
    <>
      <Banner teachersTotal={teachersTotal} valorationsTotal={valorationsTotal} />
      <Achievements
        teachersTotal={teachersTotal}
        commentsTotal={commentsTotal}
        valorationsTotal={valorationsTotal}
        usersTotal={usersTotal}
      />
      <TeachersSwiper teachers={teachers} />
      <Podium />
      <HowItWorks />
      <CommentsFast />
    </>
  );
}

export default GeneralPage;
