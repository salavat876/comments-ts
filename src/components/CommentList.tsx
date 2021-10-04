import React from 'react';
import {Alert, Card, CardContent, Typography,Button} from "@material-ui/core";
import {makeStyles} from "@mui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const CommentList:React.FC = () => {
    const classes = useStyles();
    const {comment} = useTypedSelector(state => state.comments);
    const {removeComment} = useActions()

    const handleRemoveComment = (comment:any,id:number) => {
        removeComment(comment,id)
    }
    if (!comment.length) {
        return <Alert style={{width:350,marginTop:15}} severity="info">Комментариев пока нет!</Alert>
    }
    return  (
        <div>
            {comment.map((comm,index) => (
                <Card key={index} className={classes.root}>
                <CardContent style={{display:'flex',flexDirection:'column'}} >
                    <Button
                        style={{alignSelf:'flex-end'}}
                        onClick={()=>handleRemoveComment(comm.comment,comm.id)}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                        <div style={{display:'flex',alignItems:'center'}}><span>user name:</span> <p style={{fontWeight:'bold'}}>{comm.userName}</p></div>
                    <Typography variant="h5" component="h2">
                        {comm.comment}
                    </Typography>
                </CardContent>
            </Card>))}
                </div>
    )
};
const useStyles = makeStyles({
    root: {
        width: 500,
        marginBottom:15
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default CommentList;