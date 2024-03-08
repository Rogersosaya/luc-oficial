'use client'
import { FaRegComments } from "react-icons/fa";
import CardComment from "./CardComment";
import TextAreaComment from "./TextAreaComment";
import { Teacher } from "@/interfaces/teacher.interface";
import { getCommentsByTeacher } from "@/actions/comment/get-comments-by-teacher";
import { useSession, getSession } from "next-auth/react";
import { Comment } from "@/interfaces/comment.interface";
import { User } from "@/interfaces/user.interface";
import { getReactionsByComment } from "@/actions/reaction/get-reactions-by-comment";
import { getLikesByComment } from "@/actions/reaction/get-likes-by-comment";
import { useCommentStore } from "@/store/commentStore";
import { useEffect } from "react";
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
  }, [])
  return (
    <>
      <div className="text-md font-bold mb-5 flex items-center">
        <FaRegComments className="mr-2 text-secondary" />
        Comentarios
      </div>
      <div>
        <TextAreaComment  />
        {storedComments.map((comment) => {
          return <CardComment key={comment.id} comment={comment} />;
        })}
      </div>
    </>
  );
}

export default CommentsContainer;
