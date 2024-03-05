"use client";
import { Textarea, Avatar, Button } from "@nextui-org/react";
import React, { useState } from "react";

function TextAreaComment() {
  const [value, setValue] = useState("");
  const [disabledState, setdisabledState] = useState(true);

  const HandleTextArea = (value: string) => {
    setValue(value);
    if (value == "") {
      return setdisabledState(true);
    }

    setdisabledState(false);
    
  };
  return (
    <div className="mb-5">
      <div className="w-full flex items-center  mb-2">
        <Avatar
          isBordered
          radius="full"
          size="md"
          src="/img/jordan.jpg"
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
        <Button isDisabled={disabledState} color="primary" variant="solid">
          Comentar
        </Button>
      </div>
    </div>
  );
}

export default TextAreaComment;
