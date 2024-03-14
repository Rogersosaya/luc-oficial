import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import ModalValorationBody from "./ModalValorationBody";
import { createValoration } from "@/actions/valoration/create-valoration";
import { useValorationValuesStore } from "@/store/valorationValuesStore";
import { useTeacherStore } from "@/store/teacherStore";
import { useValorationsStore } from "@/store/valorationsStore";
interface PropsTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
}
interface Props {
  isOpen: any,
  onOpenChange: any,
  teacher:PropsTeacher
}
function ModalValoration({ isOpen, onOpenChange,teacher }: Props) {
  const { teacherId } = useTeacherStore();
  const { rating, difficulty, learning, repeat, tags } =
    useValorationValuesStore();
  const { valorations, addValoration,updateExistValoration } = useValorationsStore();
  const handleValoration = () => {
    updateExistValoration()
    addValoration( teacherId, rating, difficulty, learning, repeat, tags );
  };
  
  
  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      placement="top"
    >
      <ModalContent>
        {(onClose) => {
          return (
            <>
              <ModalHeader className="flex flex-col gap-1 text-lg font-bold text-center">
                <div>{teacher.name}</div>
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-col">
                  <ModalValorationBody />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button size="lg" color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                size="lg"
                  color="primary"
                  onPress={() => {
                    onClose();
                    handleValoration();
                  }}
                >
                  Enviar Valoración
                </Button>
              </ModalFooter>
            </>
          );
        }}
      </ModalContent>
    </Modal>
  );
}

export default ModalValoration;
