import {
   
  Modal,
  ModalBody,
  ModalContent,
  
} from "@nextui-org/react";
import React from "react";
import BodyModal from './BodyModal';

function ModalComponent({ isOpen, onOpenChange }: any) {
  return (
    <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside"
    placement="center"
    >
      <ModalContent>
        {(onClose) => {
          return (
            <>
              <ModalBody>
                <div className="flex w-full flex-col">
                  <BodyModal/>
                </div>
              </ModalBody>
              
            </>
          );
        }}
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
