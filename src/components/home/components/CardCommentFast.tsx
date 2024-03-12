"use client";

import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";

import { MdOutlineDoubleArrow } from "react-icons/md";
interface User {
  image:string| null,
}
interface Teacher {
  url: string ,
}
interface Comment {
  id: string,
  value: string
  user:User,
  teacher:Teacher
}
interface Props {
  comment: Comment 
}

function CardCommentFast({comment}:Props) {
  let commentValue = comment.value.trim();
  if(commentValue.length > 200){
    commentValue = commentValue.slice(0, 200) + '...';
  }
  return (
    <>
      <Card className="w-96 bg-transparent border primary mb-2 pb-2 mx-3 mt-24 ">
        <CardHeader className="justify-between">
          <div className="flex gap-2 items-center">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src={comment.user.image!}
              color="primary"
            />

            <MdOutlineDoubleArrow className="mx-2" size={25} />

            <Avatar
              isBordered
              radius="full"
              size="md"
              src={`/teachers/${comment.teacher.url}`}
              color="secondary"
            />
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-600 overflow-hidden">
          <p>
            {commentValue}
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default CardCommentFast;
