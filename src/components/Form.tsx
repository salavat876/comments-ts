import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from "@material-ui/core/Button";
import {useActions} from "../hooks/useActions";

const Form:React.FC = () => {
    const [userInput,setUserInput] = useState('');
    const [userNameInput,setUserNameInput] = useState('')
    const {addComments} = useActions()
    const date = new Date();
    const currentDate = `${date.getDate().toString()} ${date.getMonth().toString()} ${date.getFullYear().toString()}`
    const onChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setUserInput(newValue)
    }
    const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setUserNameInput(value)
    }
    const handleSubmit = (e:React.MouseEvent) => {
        e.preventDefault()
        if (!(userNameInput && userInput)) {
            return
        } else {
            addComments(userInput,userNameInput,Date.now(),currentDate)
            setUserInput('')
            setUserNameInput('')
        }
    }
    return (
        <div>
            <div style={{display:'flex' , flexDirection:'row'}}>
                <form noValidate autoComplete="off">
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <TextField
                            onChange={onChangeName}
                            value={userNameInput}
                            style={{marginBottom:15}}
                            label="User Name"
                            type="text"
                            variant="standard"
                        />
                        <TextField label="Comment" value={userInput}  onChange={onChange} />
                    </div>

                </form>
                <Button
                    style={{marginLeft:15,height:45,alignSelf:'flex-end'}}
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