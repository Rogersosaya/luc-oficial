"use client";
import React from "react";
import { FaRegComments } from "react-icons/fa";
import CardComment from "./CardComment";
import TextAreaComment from "./TextAreaComment";

function CommentsContainer() {
  return (
    <>
      <div className="text-md font-bold mb-5 flex items-center">
        <FaRegComments className="mr-2 text-secondary" />
        Comentarios
      </div>
      <div>
        <TextAreaComment />
        <CardComment />
        <CardComment />
      </div>
    </>
  );
}

export default CommentsContainer;
