"use client";
import { useCommentStore } from "@/store/commentStore";
import { useTeacherStore } from "@/store/teacherStore";
import { Textarea, Avatar, Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
interface PropsTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
}
interface Props {
  teacher: PropsTeacher | null;
}
function TextAreaComment() {
  const { addComment } = useCommentStore();
  const { data: session } = useSession();
  const [value, setValue] = useState("");
  const [occult, setOccult] = useState(false);
  const [disabledState, setdisabledState] = useState(true);
  const { teacherId } = useTeacherStore();

  const HandleTextArea = (value: string) => {
    setValue(value);
    if (value.trim() == "") {
      return setdisabledState(true);
    }

    setdisabledState(false);
  };
  const sendComment = () => {
    addComment(teacherId, value, occult);
    
    setValue("");
    setOccult(false)
    setdisabledState(true);
  };

  return (
    <div className="mb-5">
      <div className="w-full flex items-center  mb-2">
        {occult ? (
          <Avatar isBordered radius="full" size="md" className="mr-3" />
        ) : (
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={session?.user?.image ?? ""}
            className="mr-3"
          />
        )}

       
          <Textarea
            isDisabled={session ? false : true}
            onValueChange={HandleTextArea}
            value={value}
            variant="bordered"
            labelPlacement="outside"
            placeholder={session ?"Agregar un comentario":"Inicia sesión para comentar"}
            className="w-full  md:mb-0 block"
          />
       
      </div>
      <div className="md:flex justify-between">
        <div className="text-base text-slate-400 ml-14 mb-2 md:mb-0 md:mr-6">
          {
            occult ? <>
            Tu identidad está protegida en modo anónimo para que puedas expresarte con sinceridad y sin miedo a represalias. Por favor, utilízalo de manera respetuosa y constructiva.</>: <></>
          }
          
        </div>
        <div className="flex justify-end">
          {occult ? (
            <Button
              isDisabled={disabledState}
              color="default"
              className="text-warning mr-2"
              onClick={() => setOccult(false)}
            >
              Quitar anónimo
            </Button>
          ) : (
            <Button
              isDisabled={disabledState}
              color="default"
              className="text-warning mr-2"
              onClick={() => setOccult(true)}
            >
              Anónimo
            </Button>
          )}

          <Button
            isDisabled={disabledState}
            color="default"
            variant="bordered"
            className="mr-3"
            onClick={() => setValue("")}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => sendComment()}
            isDisabled={disabledState}
            color="primary"
            variant="solid"
          >
            Comentar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TextAreaComment;
