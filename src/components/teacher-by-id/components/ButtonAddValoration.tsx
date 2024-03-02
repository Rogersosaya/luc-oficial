import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import ModalValoration from './ModalValoration';

function ButtonAddValoration() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button
        onClick={onOpen}
        startContent={<IoIosAddCircle className="text-xl" />}
        size="lg"
        className="bg-gradient-to-tr from-primary to-secondary text-white shadow-sm text-xs lg:text-sm py-2 font-bold my-1"
      >
        Agregar Valoración
      </Button>
      <ModalValoration isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default ButtonAddValoration;
