import type { Metadata } from "next";
import Container from "@/components/container/Container";
import BannerTeachers from "@/components/teachers/sections/BannerTeachers";
import Filters from "@/components/teachers/sections/Filters";
import ListTeachers from "@/components/teachers/sections/ListTeachers";
import { Pagination } from "@/components/ui/pagination/Pagination";

import { getFaculties } from "@/actions/faculty/get-faculties";
import { getCareersByFaculty } from "@/actions/career/get-careers-by-faculty";
import { getCycle } from "@/actions/cycle/get-cycle";
import { getCoursesByFilter } from "@/actions/course/get-course-by-filter";
import { getTeachersByFilter } from "@/actions/teacher/get-teacher-by-filter";
import { formatNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Profesores",
  description:
    "Busca y filtra profesores de la UNI por facultad, carrera, ciclo y curso. Compara calificaciones reales de estudiantes.",
};

interface SearchParams {
  page?: string;
  query?: string;
  faculty?: string;
  career?: string;
  cycle?: string;
  course?: string;
}

async function TeachersPage({ searchParams }: { searchParams: SearchParams }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { faculty, career, cycle, course, query } = searchParams;

  const [{ teachersResult, totalPages, totalCount }, faculties, careers, cycles, courses] =
    await Promise.all([
      getTeachersByFilter({ page, faculty, career, cycle, course, search: query ?? "" }),
      getFaculties(),
      getCareersByFaculty({ faculty: faculty ?? "" }),
      getCycle(),
      getCoursesByFilter({ faculty: faculty ?? "", career: career ?? "", cycle: cycle ?? "" }),
    ]);

  return (
    <>
      <BannerTeachers totalCount={totalCount} />
      <Container className="py-8">
        <Filters
          faculties={faculties}
          careers={careers}
          cycles={cycles}
          courses={courses}
        />

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          {formatNumber(totalCount)}{" "}
          {totalCount === 1 ? "profesor encontrado" : "profesores encontrados"}
        </p>

        <div className="mt-4">
          <ListTeachers teachers={teachersResult} />
        </div>

        <Pagination totalPages={totalPages} />
      </Container>
    </>
  );
}

export default TeachersPage;
