import { HeartIcon } from "@/components/icons/HeartIcon";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import React from "react";
import DropdownDetails from "./DropdownDetails";
import DropdownDetailsAuth from "./DropdownDetailsAuth";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

function CardComment() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="w-full bg-transparent border border-slate-600 mb-2">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/img/jordan.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Jordan Laureano
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              jordan.laureano.g@uni.pe
            </h5>
          </div>
        </div>

        <DropdownDetails/>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-600 overflow-hidden">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Excepturi dolorem, placeat asperiores perspiciatis, nesciunt
          perferendis modi similique delectus, aperiam maxime fugiat aspernatur.
          Cupiditate autem omnis, magnam officiis atque aperiam harum? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam
          libero aspernatur molestias voluptatum ullam rerum nemo expedita
          atque! Magni quasi obcaecati laborum animi eligendi ex? Eos accusamus
          repellendus facilis! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Necessitatibus ut voluptatum, a neque laboriosam eos
          voluptas laudantium sequi iste. Ab, voluptatum? Adipisci, eius. A
          quisquam obcaecati ipsum culpa vel error.
        </p>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1 items-center">
          {/* <p className="font-semibold text-default-800 text-small">4</p> */}
          <Button
            className="text-xs font-bold"
            color="primary"
            variant="bordered"
            endContent={<AiOutlineLike size={15} />}
          >
            1
          </Button>
          <Button
            className="text-xs font-bold"
            color="danger"
            variant="bordered"
            endContent={<AiOutlineDislike size={15} />}
          >
            7
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardComment;
