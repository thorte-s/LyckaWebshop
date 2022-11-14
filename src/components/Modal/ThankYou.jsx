import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ThankYou({open}) {

    function leaveSurvey() {
        window.open("https://www.google.com/"+window.results.id,"_self");
    }

    return (
        <div>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Thanks for participation!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please go back to the survey using the button: <br/><br/><Button size="small" type="button" variant="contained"
                                                                                         color="primary" onClick={leaveSurvey}>Back to survey</Button><br/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
