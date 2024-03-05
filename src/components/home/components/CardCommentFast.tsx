"use client";

import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";

import { MdOutlineDoubleArrow } from "react-icons/md";

function CardCommentFast() {
  return (
    <>
      <Card className="w-96 bg-transparent border border-slate-600 mb-2 pb-2 mx-3 mt-24">
        <CardHeader className="justify-between">
          <div className="flex gap-2 items-center">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="/img/jordan.jpg"
              color="primary"
            />

            <MdOutlineDoubleArrow className="mx-2" size={25} />

            <Avatar
              isBordered
              radius="full"
              size="md"
              src="/img/glen.jpg"
              color="secondary"
            />
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-600 overflow-hidden">
          <p>
            Frontend developer and UI/UX enthusiast. Join me on this coding
            adventure! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Excepturi dolorem, placeat asperiores perspiciatis...
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default CardCommentFast;
