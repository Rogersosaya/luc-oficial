"use client";
import React from "react";
import { FaRegComments } from "react-icons/fa";
import CardComment from "./CardComment";
import TextAreaComment from "./TextAreaComment";
import { Teacher } from "@/interfaces/teacher.interface";
import { getCommentsByTeacher } from "@/actions/comment/get-comments-by-teacher";
import { useSession, getSession } from "next-auth/react";
import { Comment } from "@/interfaces/comment.interface";
interface PropsTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
}
interface PropsComment{
  id: string;
  value: string;
  userId: string;
}
interface Props {
  teacher: PropsTeacher | null;
  comments: PropsComment[];
}
function CommentsContainer({ teacher, comments }: Props) {
  // console.log(teacher, session?.user)
  return (
    <>
      <div className="text-md font-bold mb-5 flex items-center">
        <FaRegComments className="mr-2 text-secondary" />
        Comentarios
      </div>
      <div>
        <TextAreaComment teacher={teacher} />
        {comments.map((comment) => {
          return <CardComment key={comment.id} />;
        })}
      </div>
    </>
  );
}

export default CommentsContainer;
