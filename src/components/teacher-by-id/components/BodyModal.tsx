import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaBorderAll } from "react-icons/fa6";
// import UserLike from "./UserReaction";
import UserDislike from "./UserDislike";
import { User } from "@/interfaces/user.interface";
import UserReaction from "./UserReaction";

interface PropsReaction {
  value: string;
  user: User;
}
interface Props {
  reactionsTotal?: PropsReaction[];
}

function BodyModal({ reactionsTotal }: Props) {

  return (
    <Tabs
      aria-label="Options"
      color="primary"
      variant="underlined"
      classNames={{
        tabList:
          "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full bg-[#22d3ee]",
        tab: "max-w-fit px-0 h-12",
        tabContent: "group-data-[selected=true]:text-[#06b6d4]",
      }}
    >
      <Tab
        key="all"
        title={
          <div className="flex items-center space-x-2">
            <FaBorderAll />

            <span>Todos</span>
          </div>
        }
      >
        {reactionsTotal?.map((reactionItem) => {
          return <UserReaction reactionItem={reactionItem} />;
        })}
        {/* <UserLike/>
        <UserLike/>
        <UserDislike/> */}
      </Tab>
      <Tab
        key="like"
        title={
          <div className="flex items-center space-x-2">
            <AiOutlineLike />

            <span>Estoy de acuerdo</span>
          </div>
        }
      >
        {reactionsTotal?.map((reactionItem) => {
          return (
            reactionItem.value === "like" && (
              <UserReaction reactionItem={reactionItem} />
            )
          );
        })}
        {/* <UserLike/>
        <UserLike/> */}
      </Tab>
      <Tab
        key="dislike"
        title={
          <div className="flex items-center space-x-2">
            <AiOutlineDislike />

            <span>No estoy de acuerdo</span>
          </div>
        }
      >
        {reactionsTotal?.map((reactionItem) => {
          return reactionItem.value === "dislike" && <UserReaction reactionItem={reactionItem} />;
        })}
      </Tab>
    </Tabs>
  );
}

export default BodyModal;
