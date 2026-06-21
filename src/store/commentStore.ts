import { createComment } from "@/actions/comment/create-comment";
import { deleteComment } from "@/actions/comment/delete-comment";
import { getCommentsByTeacher } from "@/actions/comment/get-comments-by-teacher";
import { updateCommentByValue } from "@/actions/comment/update-comment";
import { createReaction } from "@/actions/reaction/create-reaction";

import { ValueReaction } from "@/interfaces/reaction.interface";
import { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import { getUser } from "@/actions/user/getUser";
import { v4 as uuidv4 } from "uuid";

interface Reaction {
  id: string;
  user: User;
  value: ValueReaction;
}
interface Comment {
  id: string;
  value: string;
  occult: boolean;
  user: User;
  reactions: Reaction[];
  editEnabled?: boolean;
}
interface CommentState {
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
  getComments: (teacherId: string) => Promise<void>;
  addComment: (teacherId: string, value: string, occult: boolean) => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;
  updateComment: (commentId: string, value: string) => Promise<void>;
  editUnabledComment: (commentId: string, opened: boolean) => void;
  updateReaction: (
    commentId: string,
    value: ValueReaction,
    userEmail: string
  ) => void;
}

export const useCommentStore = create<CommentState>((set, get) => ({
  comments: [],

  setComments: (comments) => set({ comments }),

  getComments: async (teacherId: string) => {
    const comments = await getCommentsByTeacher({ teacher: teacherId });
    set({ comments: comments as unknown as Comment[] });
  },
  addComment: async (teacherId: string, value: string, occult: boolean) => {
    const { comments } = get();
    const commentAdd = await createComment({ teacher: teacherId, value, occult });
    if (commentAdd) set({ comments: [commentAdd as unknown as Comment, ...comments] });
  },
  deleteComment: async (commentId: string) => {
    const { comments } = get();
    await deleteComment({ commentId });
    set({ comments: comments.filter((c) => c.id !== commentId) });
  },
  updateComment: async (commentId: string, value: string) => {
    const { comments } = get();
    await updateCommentByValue({ commentId, value });
    set({
      comments: comments.map((c) => (c.id === commentId ? { ...c, value } : c)),
    });
  },
  editUnabledComment: (commentId, open) => {
    const { comments } = get();
    set({
      comments: comments.map((c) =>
        c.id === commentId ? { ...c, editEnabled: open } : c
      ),
    });
  },
  updateReaction: async (commentId, value, userEmail) => {
    const { comments } = get();
    const userReacted = comments.some(
      (c) =>
        c.id === commentId &&
        c.reactions.some((r) => r.user.email === userEmail)
    );
    await createReaction({ commentId, value });
    const user = await getUser(userEmail);

    if (!userReacted) {
      set({
        comments: comments.map((c) =>
          c.id === commentId
            ? {
                ...c,
                reactions: [
                  ...c.reactions,
                  {
                    id: uuidv4(),
                    user: { name: user?.name ?? "", email: userEmail, image: user?.image ?? "" },
                    value,
                  } as Reaction,
                ],
              }
            : c
        ),
      });
    } else {
      set({
        comments: comments.map((c) =>
          c.id === commentId
            ? {
                ...c,
                reactions: c.reactions.map((r) =>
                  r.user.email === userEmail ? { ...r, value } : r
                ),
              }
            : c
        ),
      });
    }
  },
}));
