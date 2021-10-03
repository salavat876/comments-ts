import {CommentAction, CommentActionType} from "../../types/comment";

export const addComments = (comment:string):CommentAction => {
    return {
        type:CommentActionType.ADD_COMMENTS,
        payload:comment
    }
}
export const removeComment = (comment:string,id?:string):CommentAction => {
    return {
        type:CommentActionType.REMOVE_COMMENTS,
        id,
        payload: comment
    }
}