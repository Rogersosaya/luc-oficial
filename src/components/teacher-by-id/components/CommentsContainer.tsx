'use client'
import React from "react";
import { FaTags } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import CardComment from './CardComment';

function CommentsContainer() {
  return (
    <>
    <div className="text-md font-bold mb-2 flex items-center">
      <FaRegComments className="mr-2 text-secondary" />
      Comentarios
    </div>
    <div>
      <CardComment/>
    </div>
</>

  );
}

export default CommentsContainer;
