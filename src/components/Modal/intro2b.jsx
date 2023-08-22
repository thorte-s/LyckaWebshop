import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormDialog from "./FormDialog";
import Intro3 from "./Intro3";


    export default function Intro2b({open, setOpen}) {
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
            <Intro3 open={rOpen} setOpen={rSetOpen}/>
           <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">How you will be paid</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p>
                             For this survey you will receive a fixed and a variable payment which depends on your decisions
                            <br/>
                            Your fixed payment is 1.5 £. Your variable payment corresponds to one of the items in your basket. Which item is determined randomly. The price of the randomly selected item will then be transferred to real money. For instance, a price of 30€ in the online shop corresponds to an amount of 30*0.015=0.45 £ of real money. This is your variable payment.
                            <br/>
                            <br/>
                            Thank you very much for your participation and your valuable time!
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
