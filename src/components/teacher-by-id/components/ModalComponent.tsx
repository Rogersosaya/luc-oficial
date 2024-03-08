import {
   
  Modal,
  ModalBody,
  ModalContent,
  
} from "@nextui-org/react";
import React from "react";
import BodyModal from './BodyModal';
import { User } from "@/interfaces/user.interface";
interface PropsReaction{
  value: string;
  user: User
}
interface Props{
  isOpen: any,
  onOpenChange: any
  reactionsTotal?: PropsReaction[] 
}
function ModalComponent({ isOpen, onOpenChange, reactionsTotal }: Props) {

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
                  <BodyModal reactionsTotal={reactionsTotal}/>
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
