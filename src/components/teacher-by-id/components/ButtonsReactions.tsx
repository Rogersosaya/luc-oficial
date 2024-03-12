'use client'
import { createReaction } from "@/actions/reaction/create-reaction";
import { ValueReaction } from "@/interfaces/reaction.interface";
import { User } from "@/interfaces/user.interface";
import { useCommentStore } from "@/store/commentStore";
import { useReactionStore } from "@/store/reactionStore";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
interface PropsReaction {
  user: User;
  value: ValueReaction;
}
interface CommentProps {
  id: string
  value: string;
  user: User;
  reactions: PropsReaction[];
}
interface Props {
  
  comment: CommentProps;
}
function ButtonsReactions({comment}: Props) {
  const {data: session} = useSession()
  const countLikes = comment.reactions.filter(
    (item) => item.value === "like"
  ).length;
  const countDislikes = comment.reactions.filter(
    (item) => item.value === "dislike"
  ).length;
  
  const {updateReaction} = useCommentStore()
  
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
    session?.user
  };
  return (
    <>
      <div className="flex gap-1 items-center">
        {/* <p className="font-semibold text-default-800 text-small">4</p> */}
        <Button
          className="text-xs font-bold"
          color="secondary"
          isDisabled={false}
          onClick={() => updateReaction(comment.id,"like",(session?.user?.email)!)}
          variant="bordered"
          endContent={<AiOutlineLike size={15} />}
        >
          {countLikes}
        </Button>
        <Button
          className="text-xs font-bold"
          color="danger"
          isDisabled={false}
          onClick={() =>  updateReaction(comment.id,"dislike",(session?.user?.email)!)}
          variant="bordered"
          endContent={<AiOutlineDislike size={15} />}
        >
          {countDislikes}
        </Button>
      </div>
    </>
  );
}

export default ButtonsReactions;
