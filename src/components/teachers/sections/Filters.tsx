"use client";
import { Career } from "@/interfaces/career.interface";
import { Course } from "@/interfaces/course.interface";
import { Cycle } from "@/interfaces/cycle.interface";
import { Faculty } from "@/interfaces/faculty.interface";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

interface Props {
  faculties: Faculty[];
  careers: Career[];
  cycles: Cycle[];
  courses: Course[];
}

function Filters({ faculties, careers, cycles, courses }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  // const [reset, setreset] = useState(false)
  // useEffect(() => {

  // }, [reset]);
  // const handleReset = () => {
  //   const params = new URLSearchParams(searchParams);
  // params.delete('faculty');
  // params.delete('course');
  // params.delete('career');
  // params.delete('cycle');
  // replace(`/teachers?${params.toString()}`);

  // }
  function handleSelect(term: string, nameQuery?: string) {
    const params = new URLSearchParams(searchParams);
    params.delete('page')
    if (nameQuery === "faculty") {
      params.delete(`career`);
      params.delete(`course`);
    }
    if (nameQuery === "career") {
      params.delete(`course`);
    }
    if (nameQuery === "cycle") {
      params.delete(`course`);
    }

    if (term) {
      params.set(`${nameQuery}`, term);
    } else {
      params.delete(`${nameQuery}`);
    }
    replace(`${pathname}?${params.toString()}`);
  }
  const defaultFaculty = searchParams.get("faculty")?.toString();
  const defaultSelectedFacultyKeys = defaultFaculty
    ? [defaultFaculty]
    : undefined;

  const defaultCareer = searchParams.get("career")?.toString();
  const defaultSelectedCareerKeys = defaultCareer ? [defaultCareer] : undefined;

  const defaultCycle = searchParams.get("cycle")?.toString();
  const defaultSelectedCycleKeys = defaultCycle ? [defaultCycle] : undefined;

  const defaultCourse = searchParams.get("course")?.toString();
  const defaultSelectedCourseKeys = defaultCourse ? [defaultCourse] : undefined;
  return (
    <>
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] flex mx-9 flex-wrap md:flex-nowrap gap-4 bg-gray-900 py-3 px-3 justify-center mt-5 rounded-lg md:rounded-xl">
        <Select
          size={"sm"}
          color={"primary"}
          label="FACULTAD"
          className="w-full  md:max-w-xs "
          defaultSelectedKeys={defaultSelectedFacultyKeys}
          onChange={(e) => {
            handleSelect(e.target.value, "faculty");
          }}
        >
          {faculties.map((faculty) => (
            <SelectItem
              className="text-2xl"
              key={faculty.name}
              value={faculty.name}
            >
              {faculty.name}
            </SelectItem>
          ))}
        </Select>
        <Select
          size={"sm"}
          color={"primary"}
          label="CARRERA"
          className="w-full  md:max-w-xs "
          defaultSelectedKeys={defaultSelectedCareerKeys}
          onChange={(e) => {
            handleSelect(e.target.value, "career");
          }}
        >
          {careers.map((career) => (
            <SelectItem color={"primary"} key={career.name} value={career.name}>
              {career.name}
            </SelectItem>
          ))}
        </Select>
        <Select
          size={"sm"}
          color={"primary"}
          label="CICLO"
          className="w-full  md:max-w-xs "
          defaultSelectedKeys={defaultSelectedCycleKeys}
          onChange={(e) => {
            handleSelect(e.target.value, "cycle");
          }}
        >
          {cycles.map((cycle) => (
            <SelectItem color={"primary"} key={cycle.name} value={cycle.name}>
              {cycle.name}
            </SelectItem>
          ))}
        </Select>
        <Select
          size={"sm"}
          color={"primary"}
          label="CURSO"
          className="  md:max-w-xs"
          defaultSelectedKeys={defaultSelectedCourseKeys}
          onChange={(e) => {
            handleSelect(e.target.value, "course");
          }}
        >
          {courses.map((course) => (
            <SelectItem color={"primary"} key={course.name} value={course.name}>
              {course.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      {/* <Button onClick={()=>handleReset()} className="h-auto ">Reset</Button> */}
    </>
  );
}

export default Filters;
