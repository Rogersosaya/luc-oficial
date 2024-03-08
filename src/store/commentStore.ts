import { createComment } from "@/actions/comment/create-comment";
import { deleteComment } from "@/actions/comment/delete-comment";
import { getCommentsByTeacher } from "@/actions/comment/get-comments-by-teacher";
import { updateCommentByValue } from "@/actions/comment/update-comment";
import { ValueReaction } from "@/interfaces/reaction.interface";
import { User } from "@/interfaces/user.interface";
import {create} from "zustand";
interface Reaction{
    user: User
    value: ValueReaction
}
 interface Comment {    
    id: string
    value: string;
    user: User
    reactions: Reaction[]
    editEnabled?: boolean
}
interface CommentState{
    comments: Comment[]
    getComments: (teacherId: string) => Promise<void>
    addComment: (teacherId: string, value:string) => Promise<void>
    deleteComment: (commentId: string) => Promise<void>
    updateComment: (commentId: string, value:string) => Promise<void>
    editUnabledComment: (commentId:string, opened:boolean) => void
}

export const useCommentStore = create<CommentState>((set, get) => ({
    comments: [],
    
    getComments: async(teacherId: string) => {
        const comments = await getCommentsByTeacher({teacher: teacherId});
        set({ comments: comments })
    },
    addComment: async(teacherId: string, value:string) => {
        const { comments } = get();
        const commentAdd = await createComment({teacher: teacherId, value: value});
        set({ comments: [commentAdd!,...comments] })
    },
    deleteComment: async (commentId: string) => {
        const { comments } = get();
        await deleteComment({ commentId: commentId });
        const updatedComments = comments.filter(comment => comment.id !== commentId);
        set({ comments: updatedComments });
    },
    updateComment: async (commentId:string,value:string ) => {
        const { comments } = get();
       await updateCommentByValue( {commentId:commentId, value:value})
        const updatedComments = comments.map(comment => {
            if (comment.id === commentId) {
                return { ...comment, value: value };
            } else {
                return comment;
            }
        });
        set({ comments: updatedComments })
        
        ;
    },
    editUnabledComment: async (commentId,open) => {
        const { comments } = get();
        const updatedComments = comments.map(comment => {
            if (comment.id === commentId && open) {
                return { ...comment, editEnabled:true };
            }else if(comment.id === commentId && !open){
                return { ...comment, editEnabled:false };
            }
             else {
                return comment;
            }
        });
        set({ comments: updatedComments });
    }   


}));
