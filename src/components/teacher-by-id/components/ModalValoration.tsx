import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import React from "react";
import ModalValorationBody from "./ModalValorationBody";

function ModalValoration({ isOpen, onOpenChange }: any) {
  return (
    <Modal
      size="lg"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      placement="center"
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
                <Button color="primary" onPress={onClose}>
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
