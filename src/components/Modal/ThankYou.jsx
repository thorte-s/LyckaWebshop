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
        window.open("https://app.prolific.co/submissions/complete?cc=7B356C5D","_self");
    }

    return (
        <div>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Thanks for participation!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your fixed payment is: 1.5£<br/>
                        Your variable payment is: {window.results.extrapayment}£<br/>
                        Your total payment is: {window.results.payment}£<br/>
                        <br/><br/>
                        Receive your payment via this Button: <br/><br/><Button size="small" type="button" variant="contained"
                                                                                         color="primary" onClick={leaveSurvey}>Receive payment</Button><br/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
