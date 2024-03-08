import { getLikesByComment } from "@/actions/reaction/get-likes-by-comment";
import { getReactionsByComment } from "@/actions/reaction/get-reactions-by-comment";
import { User } from "@/interfaces/user.interface";
import { create } from "zustand";

interface PropsReaction {
  value: string;
  user: User;
}
interface ReactionState {
  countLike: number;
  likes: PropsReaction[];

  reactions: PropsReaction[];
  getReactions: (commentId: string) => Promise<void>;
  // reactions: Reaction;
}
export const useReactionStore = create<ReactionState>((set, get) => ({
  countLike: 1,
  likes: [],
  reactions: [],
  getReactions: async (commentId: string) => {
    const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

    // Espera 2000 milisegundos antes de obtener las reacciones
    await delay();
    const reactionsTotal = await getReactionsByComment({
      commentId: commentId,
    });
    {
      set({ reactions: reactionsTotal });
    }
  },
}));
