import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog({open, setOpen}) {

    const [text, setText] = useState("");
    const [textGroup, setTextGroup] = useState("");
    const [errorGroup, setErrorGroup] = useState(text.length <=  4 && text.length >= 1);
    const [helperTextGroup, setHelperTextGroup] = useState(text.length <=  4 && text.length >= 1? 'ID is too short' : ' ');

    const [error, setError] = useState(text.length <=  4 && text.length >= 1);
    const [helperText, setHelperText] = useState(text.length <=  4 && text.length >= 1? 'ID is too short' : ' ');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        if(text.length < 10 || window.SUBJECTGROUPS[textGroup] === undefined) {
            if(text.length < 10){
                setError(true);
                setHelperText("Please enter your correct prolific ID.");
            }
            if(text.length < 4){
                setErrorGroup(true);
                setHelperTextGroup("Please enter your correct Webshop access code");
            }
        }
        else{
            window.results.id = document.getElementById("id-input").value;
            window.results.subjectGroup = document.getElementById("group-input").value;
            setOpen(false);
        }
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Welcome to the Lycka online shop!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
              Before starting, please enter your prolific ID and Group number here and click on "Go!".
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="id-input"
                        label="Prolific ID"
                        type="id"
                        value={text}
                        onChange={event => setText(event.target.value )}
                        error={error}
                        helperText={helperText}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="group-input"
                        label="Webshop access code"
                        type="id"
                        value={textGroup}
                        onChange={event => setTextGroup(event.target.value)}
                        error={errorGroup}
                        helperText={helperTextGroup}
                        fullWidth
                    />
                    <DialogContentText>
                     After selecting the products you would like to "buy", click on the shopping cart in the upper right corner. You can then click on "Checkout" to complete the online shop visit.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Go!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
