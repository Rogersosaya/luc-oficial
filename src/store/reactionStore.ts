import { getReactionsByComment } from "@/actions/reaction/get-reactions-by-comment";
import { User } from "@/interfaces/user.interface";
import { create } from "zustand";

interface PropsReaction {
  value: string;
  user: User;
}
interface ReactionState {

  reactions: PropsReaction[];
  getReactions: (commentId: string) => Promise<void>;
  // reactions: Reaction;
}
export const useReactionStore = create<ReactionState>((set, get) => ({
  reactions: [],
  getReactions: async (commentId: string) => {
    const reactionsTotal = await getReactionsByComment({
      commentId: commentId,
    });
    set({ reactions: reactionsTotal });
  },
}));
