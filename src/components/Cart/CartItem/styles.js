import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
    },
    cardContainer:{
        display: 'flex',
        flexDirection:'column'
    },
    media: {
        height: 250,
        width: 250,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 175,
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        width: 'max-content'
    },
    chip: {
        backgroundColor: '#C3DCAC'
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
    description: {
        display:"flex",
        flexDirection:"column",
        marginTop:"auto"
    },
    options: {
        display:"flex",
        flexDirection:"row"
    },
    mediaTooltip: {
        height: 60,
        width: 60,
        borderRadius:'4px',
        backgroundRepeat: 'no-repeat',
        '&:hover': {
            cursor: 'pointer',
            border: 'solid 1px grey'
        }
    }
}));
