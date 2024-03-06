import Container from "@/components/container/Container";
import Banner from "@/components/home/sections/Banner";
import React from "react";
import GridPerfil from '../../../../components/teacher-by-id/sections/GridPerfil';
import CommentsAndOthers from '../../../../components/teacher-by-id/sections/CommentsAndOthers';
import { getTeacherBySlug } from "@/actions/teacher/get-teacher-by-slug";
import { getCommentsByTeacher } from "@/actions/comment/get-comments-by-teacher";

interface Props {
  params: { slug: string };
}

async function TeacherPageId({ params }: Props) {
  
  
  const teacher = await getTeacherBySlug(params.slug) 
  
  // console.log(teacher)
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
