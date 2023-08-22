import React, {useState, useEffect} from 'react';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Navbar, Products, Cart, Filters} from './components';
import {commerce} from './lib/commerce';
import {Filter} from "@material-ui/icons";
import createMuiTheme from "@material-ui/core/styles/createTheme";
import {ThemeProvider} from "@material-ui/styles";
import ScriptTag from 'react-script-tag';
// Import the MongoDB Realm Web SDK
import * as Realm from "realm-web";
import './styles.css';

// Connect to your MongoDB Realm app
/*const REALM_APP_ID = "webapplication-yoqap"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });
var rnmb = Math.floor(Math.random() * 4) + 1;    random number
*/
window.results = {
    id: null,
    group: "ANFLVF",
    checkbox_tick:{},
    payment:null,
    subjectGroup: null,
    startTime: new Date(),
    switchedProducts: []
};
window.GROUPS = {
    ANFLVF:0
};
window.SUBJECTGROUPS = {
    FCON:1, //NO CONDITION
    TACT:2, // OPEN DROPDOWN
    SPAS:3, // CLOSE DROPDOWN
    FRET:4  // PRODUCT RECOMMENDATION
};
const App = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [filterState, setfitlerState] = useState({
            men : false,
            women: false,
            kids: false,
            s: false,
            m: false,
            l: false,
            xl: false,
            sustainable: false
    });

    const [errorMessage, setErrorMessage] = useState('');


    const fetchProducts = async () => {
        if(window.results.group && window.results.subjectGroup) {
            const {data} = await commerce.products.list({
                limit: 150,
            });
            shuffleProducts(data);
            //adjustPrices(data); DEACTIVATING PRICE ENGINE: TO ACTIVATE, REMOVE COMMENTS ON EVERY "adjustPrices" function in this file
            setProducts(data);
        } else {
            setTimeout(fetchProducts,800);
        }
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const filterProducts = async (keys) => {
        const keyArr = Object.keys(keys).reduce((acc, key) => {
            if (keys[key]) {
                acc.push(key);
            }
            return acc;
        },[]);
        const {data} = await commerce.products.list({
            category_slug: keyArr,
            limit:100,
        });
        shuffleProducts(data);
        //adjustPrices(data);
        setProducts(data);
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        const lineItems = item.cart.line_items;
        //adjustPrices(lineItems); PRICE ENGINE DEACTIVATED
        setCart(item.cart);
    };

    const handleAddSustainableAlternative = async (itemArray) => {
        const product = await commerce.products.retrieve(itemArray[0].product_id);
        window.results.switchedProducts.push(product.related_products[itemArray[1]].id);
        const response1 = await commerce.cart.remove(itemArray[0].id);
        const response2 = await commerce.cart.add(product.related_products[itemArray[1]].id, itemArray[0].quantity);
        const lineItems = response1.cart.line_items;
        //adjustPrices(lineItems);
        setCart(response2.cart);
    };

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, {quantity});
        const lineItems = response.cart.line_items;
        //adjustPrices(lineItems);
        setCart(response.cart);
    };

    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);
        const lineItems = response.cart.line_items;
        //adjustPrices(lineItems);
        setCart(response.cart);
    };

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
        setCart(response.cart);
    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        const lineItems = newCart.line_items;
        //adjustPrices(lineItems);
        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    const shuffleProducts = (products) => {
        var currentIndex = products.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [products[currentIndex], products[randomIndex]] = [
                products[randomIndex], products[currentIndex]];
        }

        return products;
    };

    const adjustPrice = (product) => {

        var baseline, correctionFactor, percentageInc, priceAdjustment;

        // While there remain elements to shuffle...
        product.price.raw = 100;
        product.price.formatted =  product.price.raw.toString();
        //product.price.formatted = product.price.raw.toString();

        return product;
    };

    const adjustPrices = (products) => {

        var priceAdjustment, priceAdjustmentFactors, productAttributes;
        var groupNR = getGroupNR(window.results.group);
        // While there remain elements to shuffle...
        products.map(product => {
            product.attributes ? productAttributes = product.attributes[1].value : productAttributes = product.sku;
            if(productAttributes.includes("S")) {
                priceAdjustmentFactors = extractValues(productAttributes);
                priceAdjustment = priceAdjustmentFactors[2] / (product.price.raw - (product.price.raw - priceAdjustmentFactors[2]) * priceAdjustmentFactors[1]);
                product.price.raw = roundPrice(product.price.raw + (product.price.raw * priceAdjustment * groupNR * priceAdjustmentFactors[0]), priceAdjustmentFactors[3]);
                product.price.formatted = product.price.raw.toString();
            }
        });
        return products;
    };

    const extractValues = (productID) => {
        var values = productID.match(/.{1,3}/g);
        var val3 = productID.substr(6, 4);
        var val4 = productID.substr(10, 3);
        return [addDotFirstSpot(values[0])/100,addDotFirstSpot(values[1]),addDotSecondSpot(val3),addDotFirstSpot(val4)];
    };

    const getGroupNR = (groupID) => {
      return window.GROUPS[groupID];
    };

    const addDotFirstSpot = (string) => {
        const pair = Array.from(string)
        pair.splice(1, 0, '.');
        const joinedPair = pair.join('');
        const floatNumber = parseFloat(joinedPair);
        return floatNumber;
    };

    const addDotSecondSpot = (string) => {
        const pair = Array.from(string)
        pair.splice(2, 0, '.');
        const joinedPair = pair.join('');
        const floatNumber = parseFloat(joinedPair);
        return floatNumber;
    };

    const roundPrice = (num, increment) => {
        var m = Number((Math.abs(num) * 100).toPrecision(15));
        if(increment === 0.49){
            return roundOnFourtynine(Math.round(m) / 100 * Math.sign(num));
        } else {
            return roundOnNinetynine(Math.round(m) / 100 * Math.sign(num));
        }
    };
    const roundOnFourtynine = (num) => {
      return Math.round(num*2)/2 - 0.01;
    };
    const roundOnNinetynine = (num) => {
        return Math.round(num) - 0.01;
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const theme = createMuiTheme({
        typography: {
            h5: {
                fontWeight: 500,
            },
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
    });

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <Router>
            <div style={{display: 'flex'}}>
                <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle}/>
                <Switch>
                    <Route exact path="/LyckaWebshop">
                        <Filters filterProducts={filterProducts} keys={filterState}/>
                        <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}
                              onEmptyCart={handleEmptyCart}  onAddSustainableAlternative={handleAddSustainableAlternative}/>
                    </Route>
                </Switch>
                </ThemeProvider>
            </div>
        </Router>
    );
};

export default App;
