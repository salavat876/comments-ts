export enum CommentActionType {
    ADD_COMMENTS = "ADD_COMMENTS",
    REMOVE_COMMENTS = "REMOVE_COMMENTS"
}

export type CommentState = {
    comment:any[],
}
interface CommentActionAdd {
    type:CommentActionType.ADD_COMMENTS,
    payload: {
        id:number,
        comment:string
    }
}
interface CommentActionRemove{
    type:CommentActionType.REMOVE_COMMENTS,
    payload: {
        id:number,
        comment:string
    }
}

export type CommentAction = CommentActionAdd | CommentActionRemove;