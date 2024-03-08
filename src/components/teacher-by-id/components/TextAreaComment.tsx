"use client";
import { createComment } from "@/actions/comment/create-comment";
import { Teacher } from "@/interfaces/teacher.interface";
import { useCommentStore } from "@/store/commentStore";
import { useTeacherStore } from "@/store/teacherStore";
import { Textarea, Avatar, Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
interface PropsTeacher{
  id: string;
  name: string,
    slug: string,
    url: string,
}
interface Props{
  teacher: PropsTeacher | null
}
function TextAreaComment() {
  const { addComment }=useCommentStore()
  const { data: session } = useSession();
  const [value, setValue] = useState("");
  const [disabledState, setdisabledState] = useState(true);
  const {teacherId} = useTeacherStore()

  const HandleTextArea = (value: string) => {
    setValue(value);
    if (value.trim() == "") {
      return setdisabledState(true);
    }

    setdisabledState(false);
  };
const sendComment = () => {
  addComment(teacherId, value)
  // createComment({teacher:teacher!.id, value:value })
  setValue("")
  setdisabledState(true);
}

  return (
    <div className="mb-5">
      <div className="w-full flex items-center  mb-2">
        <Avatar
          isBordered
          radius="full"
          size="md"
          src={session?.user?.image ?? ""}
          className="mr-3"
        />
        <Textarea
          key="bordered"
          onValueChange={HandleTextArea}
          value={value}
          variant="bordered"
          labelPlacement="outside"
          placeholder="Agregar un comentario"
          className="w-full mb-6 md:mb-0 block"
        />
      </div>
      <div className="flex justify-end">
        <Button
          isDisabled={disabledState}
          color="default"
          variant="bordered"
          className="mr-3"
          onClick={() => setValue("")}
        >
          Cancelar
        </Button>
        <Button onClick={()=>sendComment() } isDisabled={disabledState} color="primary" variant="solid">
          Comentar
        </Button>
      </div>
    </div>
  );
}

export default TextAreaComment;
