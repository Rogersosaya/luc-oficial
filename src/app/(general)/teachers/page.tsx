import Container from "@/components/container/Container";
import BannerTeachers from "../../../components/teachers/sections/BannerTeachers";
import Filters from "@/components/teachers/sections/Filters";
import ListTeachers from "@/components/teachers/sections/ListTeachers";
import { getTeachers } from "@/actions/teacher/get-teachers";

async function TeachersPage() {
  const teachers = await getTeachers();
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <BannerTeachers />
        </Container>
        <Container>
          <Filters />
        </Container>
        <Container>
          <ListTeachers teachers={teachers} />
        </Container>
      </div>
    </>
  );
}

export default TeachersPage;
