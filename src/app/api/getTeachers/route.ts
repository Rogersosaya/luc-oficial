import { getTeachersAndValorations } from "@/actions/teacher/get-teacher-and-valorations";
import { getTeachers } from "@/actions/teacher/get-teachers";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const teachersWithValorations = await getTeachersAndValorations();
  if (!teachersWithValorations) {
    return NextResponse.json(
      { message: "Error al obtener los profesores" },
      { status: 404 }
    );
  }
  return NextResponse.json(teachersWithValorations);
}
