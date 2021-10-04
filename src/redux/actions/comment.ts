import {CommentAction, CommentActionType} from "../../types/comment";

export const addComments = (comment:string,userName:string,id:number,timeWrite:string,):CommentAction => {
    return {
        type:CommentActionType.ADD_COMMENTS,
        payload: {
            id,
            comment,
            userName,
            timeWrite
        }
    }
}
export const removeComment = (comment:string,id:number):CommentAction => {
    return {
        type:CommentActionType.REMOVE_COMMENTS,
        payload: {
            id,
            comment
        }
    }
}