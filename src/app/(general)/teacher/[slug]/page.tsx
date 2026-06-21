import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GridPerfil from "@/components/teacher-by-id/sections/GridPerfil";
import CommentsAndOthers from "@/components/teacher-by-id/sections/CommentsAndOthers";
import { getTeacherBySlug } from "@/actions/teacher/get-teacher-by-slug";
import { getStatsForTeacher } from "@/actions/teacher/get-teacher-stats";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const teacher = await getTeacherBySlug(params.slug);
  if (!teacher) return { title: "Profesor no encontrado" };
  return {
    title: teacher.name,
    description: `Reseñas y calificaciones de ${teacher.name} en la UNI: dificultad, aprendizaje, etiquetas y opiniones de estudiantes.`,
  };
}

async function TeacherPageId({ params }: Props) {
  const teacher = await getTeacherBySlug(params.slug);
  if (!teacher) notFound();

  const stats = await getStatsForTeacher(teacher.id);

  return (
    <>
      <GridPerfil teacher={teacher} stats={stats} />
      <CommentsAndOthers teacher={teacher} />
    </>
  );
}

export default TeacherPageId;
