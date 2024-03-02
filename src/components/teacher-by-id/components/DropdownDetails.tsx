import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { IoIosMore } from "react-icons/io";
import ModalComponent from "./ModalComponent";
import DropdownDetailsAuth from "./DropdownDetailsAuth";
import DropdownDetailsNotAuth from "./DropdownDetailsNotAuth";

function DropdownDetails() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {true ? (
        <DropdownDetailsAuth onOpen={onOpen} />
      ) : (
        <DropdownDetailsNotAuth onOpen={onOpen} />
      )}

      <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}

export default DropdownDetails;
