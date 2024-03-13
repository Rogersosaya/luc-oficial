import Container from "@/components/container/Container";
import React from "react";
import GridPerfil from '../../../../components/teacher-by-id/sections/GridPerfil';
import CommentsAndOthers from '../../../../components/teacher-by-id/sections/CommentsAndOthers';
import { getTeacherBySlug } from "@/actions/teacher/get-teacher-by-slug";

interface Props {
  params: { slug: string };
}

async function TeacherPageId({ params }: Props) {
  
  
  const teacher = await getTeacherBySlug(params.slug) 
  
  return (
    <>
      <div className="mx-auto max-w-[120rem] px-4 md:px-8 pt-5 md:pt-[6.4rem]">
      <GridPerfil teacher={teacher}/>
      </div>
      <div className="mx-auto max-w-[120rem] px-4 md:px-8 pt-[6.4rem]">
      <CommentsAndOthers teacher={teacher}/>
      </div>
      
    </>
  );
}

export default TeacherPageId;
