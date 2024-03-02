import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IoIosMore } from "react-icons/io";

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
  export default DropdownDetailsNotAuth;