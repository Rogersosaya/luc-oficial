import Container from "@/components/container/Container";
import Banner from "@/components/home/sections/Banner";
import React from "react";
import GridPerfil from '../../../../components/teacher-by-id/sections/GridPerfil';
import CommentsAndOthers from '../../../../components/teacher-by-id/sections/CommentsAndOthers';

interface Props {
  params: { id: string };
}

function TeacherPageId({ params }: Props) {
  return (
    <>
      <Container className="pt-[6.4rem]">
        <GridPerfil/>
      </Container>
      <Container className="pt-[6.4rem]">
        <CommentsAndOthers/>
      </Container>
    </>
  );
}

export default TeacherPageId;
