import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import CommentActionCreators from '../redux/actions'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(CommentActionCreators,dispatch)
}