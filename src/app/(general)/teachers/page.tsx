import Container from "@/components/container/Container";
import BannerTeachers from "../../../components/teachers/sections/BannerTeachers";
import Filters from "@/components/teachers/sections/Filters";
import ListTeachers from "@/components/teachers/sections/ListTeachers";

import { getFaculties } from "@/actions/faculty/get-faculties";
import { getCareersByFaculty } from "@/actions/career/get-careers-by-faculty";
import { getCycle } from "@/actions/cycle/get-cycle";
import { getCoursesByFilter } from "@/actions/course/get-course-by-filter";
import { getTeachersByFilter } from "@/actions/teacher/get-teacher-by-filter";
import { Pagination } from "@/components/ui/pagination/Pagination";

async function TeachersPage({
  searchParams,
}: {
  searchParams: {
    page?:string;
    query: string;
    faculty: string;
    career: string;
    cycle: string;
    course: string;
  };
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  
  const faculty = searchParams.faculty;
  const career = searchParams.career;
  const cycle = searchParams.cycle;
  const course = searchParams.course;
  const query = searchParams.query;

  let {teachersResult, currentPage, totalPages} = await getTeachersByFilter({
    page:page,
    faculty: faculty,
    career: career,
    cycle: cycle,
    course: course,
    search: query,
  });
  const faculties = await getFaculties();
  const careers = await getCareersByFaculty({ faculty: searchParams.faculty });
  const cycles = await getCycle();
  const courses = await getCoursesByFilter({
    faculty: faculty,
    career: career,
    cycle: cycle,
  });
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <BannerTeachers />
        </Container>
        <Container>
          <Filters
            faculties={faculties}
            careers={careers}
            cycles={cycles}
            courses={courses}
          />
        </Container>
        <div className="px-0  md:px-8 mx-auto max-w-[120rem]">
          <ListTeachers teachers={teachersResult!} />
        </div>
        <Pagination totalPages={totalPages!}/>
      </div>
    </>
  );
}

export default TeachersPage;
