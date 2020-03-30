import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import Update from './pages/update/';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/products/:id" exact component={Product} />
                <Route path="/products/update/:id" component={Update} /> 
            </Switch>
        </BrowserRouter>
    );
}