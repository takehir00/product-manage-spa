import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {CookiesProvider} from 'react-cookie';

import './index.css';
import TokenForm from './components/TokenForm';
import ProductsIndex from './components/ProductsIndex';
import ProductNew from './components/ProductNew';
import * as serviceWorker from './serviceWorker';
import ProductUpdate from "./components/ProductUpdate";
import ProductDelete from "./components/ProductDelete";

require('dotenv').config();

ReactDOM.render(
    <CookiesProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={(props) => <TokenForm {...props}/>}/>
                <Route exact path="/products" render={(props) => <ProductsIndex {...props}/>}/>
                <Route exact path="/products/new" render={(props) => <ProductNew {...props}/>}/>
                <Route exact path="/products/update/:id" render={(props) => <ProductUpdate {...props}/>}/>
                <Route exact path="/products/delete/:id" render={(props) => <ProductDelete {...props}/>}/>
            </Switch>
        </BrowserRouter>
    </CookiesProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
