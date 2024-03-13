'use client'
import { FaRegComments } from "react-icons/fa";
import CardComment from "./CardComment";
import TextAreaComment from "./TextAreaComment";
import { User } from "@/interfaces/user.interface";
import { useCommentStore } from "@/store/commentStore";
import { useEffect, useState } from "react";
import { useTeacherStore } from "@/store/teacherStore";

interface PropsTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
}
interface PropsComment{
  id: string;
  value: string;
  occult:boolean;
  user: User ;
}
interface Props {
  teacher: PropsTeacher | null;
  comments: PropsComment[];
}
function CommentsContainer({ teacher, comments }: Props) {
  const { comments:storedComments,getComments }=useCommentStore()
  const {updateTeacher, teacherId}=  useTeacherStore()
  useEffect(() => {
    getComments(teacher!.id)
    updateTeacher(teacher!.id)
  }, [getComments,updateTeacher,teacher])
  
  

  
  return (
    <>
      <div className="text-md font-bold mb-1 flex items-center">
        <FaRegComments className="mr-2 text-secondary" />
        <div>Comentarios</div> 
      </div>
      <span className=" mb-5 text-slate-400 text-xs leading-5">(Recuerda comentar siempre con respeto)</span>
      <div>
        <TextAreaComment  />
        
        {storedComments.map((comment) => {
          return (
          
          
          <CardComment key={comment.id} comment={comment} />);
        })}
        
      </div>
    </>
  );
}

export default CommentsContainer;
