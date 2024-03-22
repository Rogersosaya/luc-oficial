import { createComment } from "@/actions/comment/create-comment";
import { deleteComment } from "@/actions/comment/delete-comment";
import { getCommentsByTeacher } from "@/actions/comment/get-comments-by-teacher";
import { updateCommentByValue } from "@/actions/comment/update-comment";
import { createReaction } from "@/actions/reaction/create-reaction";
import prisma from "@/lib/prisma";

import { ValueReaction } from "@/interfaces/reaction.interface";
import { User } from "@/interfaces/user.interface";
import { getServerSession } from "next-auth";
import { create } from "zustand";
import { getUser } from "@/actions/user/getUser";
import { v4 as uuidv4 } from 'uuid';
interface Reaction {
  id: string;
  user: User;
  value: ValueReaction;
}
interface Comment {
  id: string;
  value: string;
  occult:boolean;
  user: User;
  reactions: Reaction[];
  editEnabled?: boolean;
}
interface CommentState {
  comments: Comment[];
  getComments: (teacherId: string) => Promise<void>;
  addComment: (teacherId: string, value: string, occult:boolean) => Promise<void>;
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

  getComments: async (teacherId: string) => {
    const comments = await getCommentsByTeacher({ teacher: teacherId });
    set({ comments: comments });
  },
  addComment: async (teacherId: string, value: string, occult:boolean) => {
    const { comments } = get();
    const commentAdd = await createComment({
      teacher: teacherId,
      value: value,
      occult: occult,
    });
    set({ comments: [commentAdd!, ...comments] });
  },
  deleteComment: async (commentId: string) => {
    const { comments } = get();
    await deleteComment({ commentId: commentId });
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    set({ comments: updatedComments });
  },
  updateComment: async (commentId: string, value: string) => {
    const { comments } = get();
    await updateCommentByValue({ commentId: commentId, value: value });
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, value: value };
      } else {
        return comment;
      }
    });
    set({ comments: updatedComments });
  },
  editUnabledComment: async (commentId, open) => {
    const { comments } = get();
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId && open) {
        return { ...comment, editEnabled: true };
      } else if (comment.id === commentId && !open) {
        return { ...comment, editEnabled: false };
      } else {
        return comment;
      }
    });
    set({ comments: updatedComments });
  },
  updateReaction: async (commentId, value, userEmail) => {
    const { comments } = get();
    const userReacted = comments.some(comment => comment.id === commentId && comment.reactions.some(reaction => reaction.user.email === userEmail));
    await createReaction({ commentId: commentId, value: value });
    const user = await getUser(userEmail);
    console.log(user)

    

    if (!userReacted) {
        const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
                const newReaction = {id:uuidv4(), user: {name:user!.name, email: userEmail, image:user!.email,  }, value: value };
                return { ...comment, reactions: [...comment.reactions, newReaction] };
            } else {
                return comment;
            }
        });
        set({ comments: updatedComments });
    } else {
        // Si el usuario ya ha reaccionado, actualiza su reacción
        const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
                const reactions = comment.reactions.map((reaction) => {
                    if (reaction.user.email === userEmail) {
                        return { ...reaction, value: value };
                    } else {
                        return reaction;
                    }
                });
                return { ...comment, reactions: reactions };
            } else {
                return comment;
            }
        });
        set({ comments: updatedComments });
        
    }
  },
}));
