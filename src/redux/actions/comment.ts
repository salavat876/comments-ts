import {CommentAction, CommentActionType} from "../../types/comment";

export const addComments = (comment:string,id:number):CommentAction => {
    return {
        type:CommentActionType.ADD_COMMENTS,
        payload: {
            id,
            comment
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