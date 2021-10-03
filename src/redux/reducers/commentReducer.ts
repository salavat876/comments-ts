import {CommentActionType,CommentState,CommentAction} from "../../types/comment";

const initialState:CommentState = {
    comment:[]
}
export const commentReducer = (state:CommentState = initialState,action:CommentAction) => {
    switch (action.type) {
        case CommentActionType.ADD_COMMENTS:{
            return {...state,comment:[...state.comment,action.payload]}
        }
       case CommentActionType.REMOVE_COMMENTS:{
           const newFilterArr = state.comment.filter(comm =>action.payload.id  !== comm.id)
            return {...state,comment: [...state.comment = newFilterArr] }
        }
        default:return state
    }
}