import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Intro2 from "./Intro2";

export default function Intro1({open, setOpen}) {
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
            <Intro2 open={rOpen} setOpen={rSetOpen}/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Introduction</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p>
                            Welcome back and thank you for participating &#8212; your assistance is greatly appreciated!
                            All your answers will be treated anonymously, with strict confidentiality, and will be used
                            for research purposes only.
                            Please do not click return or refresh in your browser during the survey!
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
