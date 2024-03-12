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
      <Container className="pt-[6.4rem]">
        <GridPerfil teacher={teacher}/>
      </Container>
      <Container className="pt-[6.4rem]">
        <CommentsAndOthers teacher={teacher}/>
      </Container>
    </>
  );
}

export default TeacherPageId;
