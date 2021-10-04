import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useActions} from "../hooks/useActions";

const Form:React.FC = () => {
    const [userInput,setUserInput] = useState('')
    const {addComments} = useActions()
    const date = new Date();
    const currentDate = `${date.getDate().toString()} ${date.getMonth().toString()} ${date.getFullYear().toString()}`
    const onChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setUserInput(newValue)
    }
    const handleSubmit = (e:React.MouseEvent) => {
        e.preventDefault()
         addComments(userInput,Date.now(),currentDate)
        setUserInput('')
    }
    return (
        <div>
            <div style={{display:'flex'}}>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Comment" value={userInput}  onChange={onChange} />
                </form>
                <Button
                    style={{marginLeft:15}}
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                >
                   Send
                </Button>
            </div>
        </div>
    );
};

export default Form;