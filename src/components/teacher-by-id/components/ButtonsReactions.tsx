'use client'
import { createReaction } from "@/actions/reaction/create-reaction";
import { User } from "@/interfaces/user.interface";
import { useReactionStore } from "@/store/reactionStore";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
interface CommentProps {
  id: string
  value: string;
  user: User;
}
interface Props {
  countLikes?: number 
  countDislikes?: number
  comment: CommentProps;
}
function ButtonsReactions({comment, countLikes, countDislikes}: Props) {
  // const {getCountLike, likes} = useReactionStore()
  // useEffect(() => {
  //   const countsLike = getCountLike(comment.id);
  // }, []);
  
  // console.log(likes)
  const [likeClient, setLikeClient] = useState(countLikes)
  const [dislikeClient, setDislikeClient] = useState(countDislikes)
  
  
  
  const [selectedLike, setSelectedLike] = useState(false);
  const [selectedDislike, setSelectedDislike] = useState(false);

  type ValueReaction = 'like'|'dislike';

  const handlerReaction = (value:ValueReaction ) => {
    
    createReaction({commentId: comment.id,value:value})
    if(value === "like") {
      if(likeClient !== countLikes) return
      if(dislikeClient !== countDislikes) {setDislikeClient(dislikeClient!-1)}
      setLikeClient(likeClient!+1);
      setSelectedLike(true)
    }

    if(value === "dislike"){
      if(dislikeClient !== countDislikes) return
      if(likeClient !== countLikes) {setLikeClient(likeClient!-1)}

      setDislikeClient(dislikeClient!+1);
      setSelectedDislike(true)
    }
    
  };
  return (
    <>
      <div className="flex gap-1 items-center">
        {/* <p className="font-semibold text-default-800 text-small">4</p> */}
        <Button
          className="text-xs font-bold"
          color="primary"
          isDisabled={false}
          onClick={() => handlerReaction("like")}
          variant="bordered"
          endContent={<AiOutlineLike size={15} />}
        >
          {likeClient}
        </Button>
        <Button
          className="text-xs font-bold"
          color="danger"
          isDisabled={false}
          onClick={() => handlerReaction("dislike")}
          variant="bordered"
          endContent={<AiOutlineDislike size={15} />}
        >
          {dislikeClient}
        </Button>
      </div>
    </>
  );
}

export default ButtonsReactions;
