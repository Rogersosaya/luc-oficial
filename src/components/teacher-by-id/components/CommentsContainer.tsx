"use client";

import { useEffect } from "react";
import { ChatCircleText } from "@phosphor-icons/react";
import CardComment from "./CardComment";
import TextAreaComment from "./TextAreaComment";
import { useCommentStore } from "@/store/commentStore";
import { useTeacherStore } from "@/store/teacherStore";

interface TeacherProp {
  id: string;
  name: string;
  slug: string;
}

function CommentsContainer({
  teacher,
  comments,
}: {
  teacher: TeacherProp;
  comments: any[];
}) {
  const { comments: storedComments, setComments } = useCommentStore();
  const { updateTeacher } = useTeacherStore();

  // Seed the store with server-rendered comments (no client refetch).
  useEffect(() => {
    setComments(comments);
    updateTeacher(teacher.id);
  }, [comments, teacher.id, setComments, updateTeacher]);

  return (
    <section>
      <div className="flex items-center gap-2">
        <ChatCircleText size={20} weight="fill" className="text-primary" />
        <h2 className="text-lg font-semibold">Reseñas de estudiantes</h2>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Comparte tu experiencia siempre con respeto.
      </p>

      <div className="mt-5">
        <TextAreaComment />
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {storedComments.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            Aún no hay reseñas. Sé el primero en compartir tu experiencia.
          </div>
        ) : (
          storedComments.map((comment) => (
            <CardComment key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </section>
  );
}

export default CommentsContainer;
