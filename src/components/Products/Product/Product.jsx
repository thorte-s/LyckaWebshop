import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    Button,
    Container,
    Collapse, styled, AccordionDetails, Accordion, AccordionSummary
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';
import './styles.css';
import Chip from "@material-ui/core/Chip";
//import EcoIcon from '@material-ui/icons/Eco';
import EcoIcon from '../../../assets/icon.svg'
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Product = ({product, onAddToCart}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(window.results.subjectGroup);

    const handleChange = (panel) => (event, newExpanded) => {
        const itemName= event.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[0].title;
        if(!(itemName in window.results.checkbox_tick)) {
            window.results.checkbox_tick[itemName] = true;
        }
        setExpanded(newExpanded ? panel : false);
    };

    const handleAddToCart = () => onAddToCart(product.id, 1);
    const svgIcon = (
        <Icon>
            <img src={EcoIcon} className={classes.iconImage}/>
        </Icon>

    );

    const renderBanner = () => (
        <span className="tooltip"><Chip className={classes.chip} icon={svgIcon} label="Sustainable"/> <span
            className="tooltiptext">For products labelled as “sustainable”, certified, organic materials are used.</span></span>
    );
    const renderProductinfo = () => (
        <Accordion expanded={expanded === 'TACT'} className={classes.accordion} onChange={handleChange('TACT')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Product information</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {product.attributes[0].value}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
    /* <Buton aria-label="Add to Cart" onClick={handleAddToCart}>
                    <AddShoppingCart/>
                    Add to Cart
                </Buton>
                         <Button
                    variant="contained"
                    className={classes.button}
                    startIcon={<AddShoppingCart />}
                    onClick={handleAddToCart}
                 >
                    Add to Cart
                </Button>*/
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.price.formatted}€
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2"
                            color="textSecondary" component="p"/>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <div>
                {window.results.subjectGroup==="SPAS"||window.results.subjectGroup==="TACT"?renderProductinfo():null}
                </div>
                <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;
/*      {product.categories.some(item => item.slug === 'sustainable') ? renderBanner() : null}*/
/*    <ExpandMore
expand={expanded}
onClick={handleExpandClick}
aria-expanded={expanded}
aria-label="show more"
    >
    <ExpandMoreIcon />
    </ExpandMore> */