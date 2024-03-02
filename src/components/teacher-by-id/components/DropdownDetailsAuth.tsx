import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoIosMore } from "react-icons/io";
const DropdownDetailsAuth = ({ onOpen }: any) => (
  <Dropdown>
    <DropdownTrigger>
      <Button className="rounded-lg" isIconOnly variant="bordered">
        <IoIosMore className="text-md" />
      </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions">
      <DropdownItem key="edithAuth">Editar</DropdownItem>
      <DropdownItem key="detailsAuth" onPress={onOpen}>
        Detalles
      </DropdownItem>
      <DropdownItem key="deleteAuth" className="text-danger" color="danger">
        Eliminar
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

export default DropdownDetailsAuth;
