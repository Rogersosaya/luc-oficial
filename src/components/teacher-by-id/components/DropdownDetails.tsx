import {
  
  useDisclosure,
} from "@nextui-org/react";
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
