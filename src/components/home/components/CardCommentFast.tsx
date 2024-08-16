"use client";

import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";

import { MdOutlineDoubleArrow } from "react-icons/md";
interface User {
  image: string | null;
}
interface Teacher {
  name: string;
  url: string;
}
interface Comment {
  id: string;
  value: string;
  occult: boolean;
  user: User;
  teacher: Teacher;
}
interface Props {
  comment: Comment;
}

function CardCommentFast({ comment }: Props) {
  let commentValue = comment.value.trim();
  if (commentValue.length > 200) {
    commentValue = commentValue.slice(0, 200) + "...";
  }
  return (
    <>
      <div className="h-[280px] flex items-center">
        <Card className="w-full bg-black border pb-1 mb-4 autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}">
          <CardHeader className="justify-between">
            <div className="flex gap-2 items-center">
              {comment.occult ? (
                <Avatar isBordered radius="full" size="md" src="" />
              ) : (
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  color="primary"
                  src={comment.user.image!}
                />
              )}

              <MdOutlineDoubleArrow className="mx-2" size={25} />
              <div className="font-bold">{comment.teacher.name}</div>
              {/* <Avatar
              isBordered
              radius="full"
              size="md"
              src="{`/teachers/${comment.teacher.url}`}"
              color="secondary"
            /> */}
            </div>
          </CardHeader>
          <CardBody className="px-3  text-xs text-default-600 overflow-hidden">
            <p>{commentValue}</p>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default CardCommentFast;
