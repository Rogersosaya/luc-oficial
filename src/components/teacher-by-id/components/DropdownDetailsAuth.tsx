import { deleteComment } from "@/actions/comment/delete-comment";
import { ValueReaction } from "@/interfaces/reaction.interface";
import { User } from "@/interfaces/user.interface";
import { useCommentStore } from "@/store/commentStore";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoIosMore } from "react-icons/io";
interface PropsReaction{
  user: User
  value: ValueReaction
}
interface CommentProps {
  id: string;
  value: string;
  user: User;
  reactions: PropsReaction[]
}
interface Props {
  onOpen: any
  comment: CommentProps;
}

const DropdownDetailsAuth = ({ onOpen, comment }: Props) => {
  const { deleteComment,editUnabledComment } = useCommentStore();
  return (
  <Dropdown>
    <DropdownTrigger>
      <Button className="rounded-lg" isIconOnly variant="bordered">
        <IoIosMore className="text-md" />
      </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions">
      <DropdownItem  key="edithAuth" onPress={() => editUnabledComment(comment.id, true)}>Editar</DropdownItem>
      <DropdownItem key="detailsAuth" onPress={onOpen}>
        Detalles
      </DropdownItem>
      <DropdownItem onPress={() => deleteComment(comment.id)}   key="deleteAuth" className="text-danger" color="danger">
        Eliminar
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )};

export default DropdownDetailsAuth;
