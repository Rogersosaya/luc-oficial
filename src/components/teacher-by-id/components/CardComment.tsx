
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Textarea,
} from "@nextui-org/react";

import DropdownDetails from "./DropdownDetails";
import { User } from "@/interfaces/user.interface";
import ButtonsReactions from "./ButtonsReactions";

import {  useState } from "react";
import {  ValueReaction } from "@/interfaces/reaction.interface";
import { useCommentStore } from "@/store/commentStore";

interface PropsReaction {
  user: User;
  value: ValueReaction;
}
interface CommentProps {
  id: string;
  value: string;
  user: User;
  reactions: PropsReaction[];
  editEnabled?: boolean;
}
interface Props {
  comment: CommentProps;
}

function CardComment({ comment }: Props) {
  
 
  
  const [value, setValue] = useState(comment.value);
  const [disabledState, setdisabledState] = useState(true);
  const {updateComment, editUnabledComment} =  useCommentStore()
  const HandleTextArea = (value: string) => {
    setValue(value);
    if (value.trim() == "") {
      return setdisabledState(true);
    }

    setdisabledState(false);
  };
  const sendComment = () => {
    

    editUnabledComment(comment.id, false)
    updateComment(comment.id, value);
    
    
  };


  return (
    <Card className="w-full bg-transparent border border-slate-600 mb-2">
      <CardHeader className="justify-between">
        
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={comment.user.image!}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {comment.user.name}
            </h4>

            <h5 className="text-small tracking-tight text-default-400">
              {comment.user.email}
            </h5>
          </div>
        </div>

        <DropdownDetails comment={comment} />
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-600 overflow-hidden">
        {comment.editEnabled ? (
          <>
            <Textarea
              variant="bordered"
              className="w-full mb-2"
              onValueChange={HandleTextArea}
              value={value}
            />
            <div className="flex justify-end">
              <Button
                color="default"
                variant="bordered"
                className="mr-3"
                onClick={() => editUnabledComment(comment.id, false)}
              >
                Cancelar
              </Button>
              <Button
                onClick={() => sendComment()}
                isDisabled={disabledState}
                color="primary"
                variant="solid"
              >
                Editar
              </Button>
            </div>
          </>
        ) : (
          
          <p>{comment.value}</p>
        )}
      </CardBody>
      <CardFooter className="gap-3">
        <ButtonsReactions
          comment={comment}
          
        />
      </CardFooter>
    </Card>
  );
}

export default CardComment;
