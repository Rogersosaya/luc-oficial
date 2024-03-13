import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import ModalValorationBody from "./ModalValorationBody";
import { createValoration } from "@/actions/valoration/create-valoration";
import { useValorationValuesStore } from "@/store/valorationValuesStore";
import { useTeacherStore } from "@/store/teacherStore";
import { useValorationsStore } from "@/store/valorationsStore";

function ModalValoration({ isOpen, onOpenChange }: any) {
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
                <div>RODRIGUEZ-RAFAEL-GLEN DARIO</div>
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-col">
                  <ModalValorationBody />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
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
