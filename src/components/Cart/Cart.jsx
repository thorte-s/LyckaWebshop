import React, {useEffect, useState} from 'react';
import {Button, Container, Grid, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {commerce} from './../../lib/commerce';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import axios from 'axios';
import ThankYou from "../Modal/ThankYou";
import './styles.css';

const Cart = ({cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart, onAddSustainableAlternative}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleEmptyCart = () => onEmptyCart();
    const [products, setProducts] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    const renderProducts = async () => {
        if (cart.line_items) {
            const data = await Promise.all(cart.line_items.map(async (item) => {
               return commerce.products.retrieve(item.product_id);
            }));
            setProducts(data);
        }
    };
    const calcSubtotal = async () => {
        let subtotal = 0;
        if (cart.line_items) {
            cart.line_items.forEach((item) => {
                subtotal+= roundPrice(item.price.raw*item.quantity);
                //   return commerce.products.retrieve(item.product_id);
            });
            setSubtotal(roundPrice(subtotal));
        }
    };
    const roundPrice = (num) => {
        const m = Number((Math.abs(num) * 100).toPrecision(15));
        return Math.round(m) / 100 * Math.sign(num);
    };
    const renderEmptyCart = () => (
        <div>
            <Typography variant="subtitle1">You have no items in your shopping cart,
                <Link className={classes.link} to="/LyckaWebshop"> start adding some</Link>!
            </Typography>
            <Button className={classes.checkoutButtonEmptyCart} size="large" type="button" variant="contained"
                    color="primary" component={Link} to="/LyckaWebshop">Back</Button>
            <Button className={classes.checkoutButtonEmptyCart} onClick={handleOpen} size="large"
                    type="button" variant="contained" color="primary">Checkout</Button>
        </div>
    );

    useEffect(() => {
        const fetchProducts = async () => {
            renderProducts();
        }
        fetchProducts().catch(console.error);
        calcSubtotal();
    }, cart.line_items);

    if (!cart.line_items) return 'Loading';

    const renderCart = () => (
        <>
            <Grid className="cart-grid" container spacing={3}>
                {cart.line_items.map((lineItem, index) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem product={products[index]} item={lineItem} onUpdateCartQty={onUpdateCartQty}
                                  onRemoveFromCart={onRemoveFromCart} onAddSustainableAlternative={onAddSustainableAlternative}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {subtotal}€</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained"
                            color="primary" component={Link} to="/LyckaWebshop">Back</Button>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained"
                            color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} onClick={handleOpen} size="large"
                            type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );


    const handleOpen = async () => {
        let products = [];
        let productItems = await Promise.all(cart.line_items.map(async (item) => {
            return {product: await commerce.products.retrieve(item.product_id),item};
        }));
        const sustainableItemCounter = productItems.reduce((acc, productItem) => {
            if (productItem.product.categories.map(category => category.slug).includes("sustainable")) {
                acc += productItem.item.quantity;
            }
            return acc
        }, 0);
        const sustainableItemPrice = productItems.reduce((acc, productItem) => {
            if (productItem.product.categories.map(category => category.slug).includes("sustainable")) {
                acc += productItem.item.price.raw*productItem.item.quantity;
            }
            return acc
        }, 0);

        //for (var i=0;i<cart.total_unique_items;i++) {

           /* var jsonObj = {
                participant_id: window.results.id,
                group_id: window.results.group,
                product_id:cart.line_items[i].sku,
                product_qnty:cart.line_items[i].quantity,
                product_price:cart.line_items[i].price.raw,
                startTime: window.results.startTime,
                timePassedSec: (new Date().getTime() - window.results.startTime.getTime()) / 1000,
                products: cart.line_items,
                total_items: cart.total_items,
                total_unique_items: cart.total_unique_items,
                total_items_sustainable: sustainableItemCounter,
                subtotal_sustainable: sustainableItemPrice,
                subtotal: cart.subtotal.raw
            };*/
             cart.line_items.forEach((item, index) => {
                products[index] = {
                    product_id: item.id,
                    product_quantity: item.quantity,
                    product_price: item.price.raw,
                    product_sustainable: !!item.sku.includes("S"),
                    product_switched: !!window.results.switchedProducts.find(element => element === item.product_id)
                };
           })
            var jsonObj = {
                participant_id: window.results.subjectGroup,
                startTime: window.results.startTime,
                group_id: window.results.group,
                endTime: new Date().getTime(),
                duration: (new Date().getTime() - window.results.startTime.getTime()) / 1000,
                finished: "True",
                recorded_date: new Date().getTime(),
                checkbox_tick: "to-DO",
                total_items: cart.total_items,
                subtotal: cart.subtotal.raw,
                products: products
            };
             COMMENT IN FOR DATA PUSH TO SERVERS
          *  axios.post("https://eu-central-1.aws.data.mongodb-api.com/app/application-0-vxthq/endpoint/postData",
                jsonObj).then(res => {
                console.log(res);
            });*/
            COMMENT IN FOR DATA PUSH TO SERVERS
        handleClickOpen();
        setOpen(true);
         });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Container>
            <ThankYou open={open} setOpen={setOpen}/>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container>
    );
};

export default Cart;
