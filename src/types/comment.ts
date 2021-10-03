export enum CommentActionType {
    ADD_COMMENTS = "ADD_COMMENTS",
    REMOVE_COMMENTS = "REMOVE_COMMENTS"
}

export type CommentState = {
    comment:any[],
}
interface CommentActionAdd {
    type:CommentActionType.ADD_COMMENTS,
    payload:string
}
interface CommentActionRemove{
    type:CommentActionType.REMOVE_COMMENTS,
    id?:string
    payload:string
}

export type CommentAction = CommentActionAdd | CommentActionRemove;