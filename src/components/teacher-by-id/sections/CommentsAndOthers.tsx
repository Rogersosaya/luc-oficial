import React from "react";

import Others from "../components/Others";
import CommentsContainer from "../components/CommentsContainer";
import { getTeachers } from "@/actions/teacher/get-teachers";
import { Teacher } from "@/interfaces/teacher.interface";
import { getCommentsByTeacher } from "@/actions/comment/get-comments-by-teacher";
import { getValorationsByTeacher } from "@/actions/valoration/get-valorations";
interface PropsTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
}
interface Props {
  teacher: PropsTeacher | null;
}
async function CommentsAndOthers({ teacher }: Props) {
  const teachers = await getTeachers();
  const comments = await getCommentsByTeacher({ teacher: teacher!.id });
  
  return (
    <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] grid grid-cols-12    text-white gap-4 px-1 md:px-11">
      <div className="col-span-12  md:col-span-8 flex flex-col border-slate-500 border px-4 py-3 rounded-lg my-2">
        <CommentsContainer comments={comments} teacher={teacher} />
      </div>
      <div className="col-span-12  md:col-span-4 flex flex-col border-slate-500 border px-4 py-3 rounded-lg my-2">
        <Others teachers={teachers} />
      </div>
    </div>
  );
}

export default CommentsAndOthers;
