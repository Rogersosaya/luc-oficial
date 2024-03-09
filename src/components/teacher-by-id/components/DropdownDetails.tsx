"use client";

import {
  
  useDisclosure,
} from "@nextui-org/react";
import ModalComponent from "./ModalComponent";
import DropdownDetailsAuth from "./DropdownDetailsAuth";
import DropdownDetailsNotAuth from "./DropdownDetailsNotAuth";
import { User } from "@/interfaces/user.interface";
import { useEffect } from "react";
import { getCommentsByTeacher } from "@/actions/comment/get-comments-by-teacher";
import { ValueReaction } from "@/interfaces/reaction.interface";
import { useSession } from "next-auth/react";

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
  comment: CommentProps;
}


function DropdownDetails({comment}:Props) {
  const {data: session}=useSession()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  return (
    <>
      {comment.user.email == session?.user!.email  ? (
        <DropdownDetailsAuth comment={comment} onOpen={onOpen} />
      ) : (
        <DropdownDetailsNotAuth onOpen={onOpen} />
      )}

      <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange}  reactionsTotal={comment.reactions} />
    </>
  );
}

export default DropdownDetails;
