import React from "react";

import Others from '../components/Others';
import CommentsContainer from "../components/CommentsContainer";
import { getTeachers } from "@/actions/teacher/get-teachers";

async function CommentsAndOthers() {
  const teachers = await getTeachers()
  return (
    <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] grid grid-cols-12    text-white gap-4 px-1 md:px-11">
      <div className="col-span-12  md:col-span-8 flex flex-col border-slate-500 border px-4 py-3 rounded-lg my-2">
        <CommentsContainer/>
      </div>
      <div className="col-span-12  md:col-span-4 flex flex-col border-slate-500 border px-4 py-3 rounded-lg my-2">
        <Others teachers={teachers} />
      </div>
    </div>
  );
}

export default CommentsAndOthers;
