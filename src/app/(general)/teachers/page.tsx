import Container from "@/components/container/Container";
import BannerTeachers from "../../../components/teachers/sections/BannerTeachers";
import Filters from "@/components/teachers/sections/Filters";
import ListTeachers from "@/components/teachers/sections/ListTeachers";
import { getTeachers } from "@/actions/teacher/get-teachers";
import { getCourses } from "@/actions/course/get-courses";
import { getFaculties } from "@/actions/faculty/get-faculties";
import { getCareersByFaculty } from "@/actions/career/get-careers-by-faculty";
import { getCycle } from "@/actions/cycle/get-cycle";
import { getCoursesByFilter } from "@/actions/course/get-course-by-filter";

async function TeachersPage({searchParams}:{
searchParams:{
  faculty: string;
  career: string;
  cycle: string;
  course: string;

}
}) {
  const faculty = searchParams.faculty;
  const career = searchParams.career;
  const cycle = searchParams.cycle;
  const course = searchParams.course;

  const teachers = await getTeachers();
  // const courses = await getCourses();
  const faculties = await getFaculties();
  const careers = await getCareersByFaculty({faculty: searchParams.faculty});
  const cycles = await getCycle();
  const courses = await getCoursesByFilter({faculty:faculty,career:career,cycle:cycle})
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <BannerTeachers />
        </Container>
        <Container>
          <Filters faculties={faculties} careers={careers} cycles={cycles} courses={courses} />
        </Container>
        <Container>
          <ListTeachers teachers={teachers} />
        </Container>
      </div>
    </>
  );
}

export default TeachersPage;
