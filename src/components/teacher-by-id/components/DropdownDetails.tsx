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

const DropdownDetailsNotAuth = ({ onOpen }: any) => (
  <Dropdown>
    <DropdownTrigger>
      <Button className="rounded-lg" isIconOnly variant="bordered">
        <IoIosMore className="text-md" />
      </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions">
      <DropdownItem key="details" onPress={onOpen}>
        Detalles
      </DropdownItem>
      <DropdownItem key="delete" className="text-warning" color="warning">
        Denunciar
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);
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
