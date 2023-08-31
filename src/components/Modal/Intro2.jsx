import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Intro2b from "./Intro2b";

export default function Intro2({open, setOpen}) {
    const [rOpen, rSetOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        handleClickOpen();
    };
    const handleClickOpen = () => {
        rSetOpen(true);
    };

    return (
        <div>
            <Intro2b open={rOpen} setOpen={rSetOpen}/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Please read the following carefully</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p>
                            Imagine you want to go on a two-week vacation.
                            You drive to the airport, check in your luggage and board the airplane.
                            <br/>
                            <br/>
                            When arriving at your destination the airline tells you that your luggage will arrive 
                            two days after landing, because they checked your luggage into another airplane.
                            For you to have clothes for the next two days, the airline offers you the following:
                            <br/>
                            <br/>
                            You receive a budget of 200 €, which you can spend in the following online-shop:
                            <br/>
                            (1) You must spend the whole amount
                            <br/>
                            (2) You can simply put the items in the basket and proceed to the checkout.
                        </p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
