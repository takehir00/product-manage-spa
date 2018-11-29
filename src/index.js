import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './index.css';
import ProductsIndex from './components/ProductsIndex';
import ProductNew from './components/ProductNew';
import * as serviceWorker from './serviceWorker';
import ProductUpdate from "./components/ProductUpdate";
import ProductDelete from "./components/ProductDelete";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ProductsIndex}/>
            <Route exact path="/products/new" component={ProductNew}/>
            <Route exact path="/products/update/:id" component={ProductUpdate}/>
            <Route exact path="/products/delete/:id" component={ProductDelete}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
