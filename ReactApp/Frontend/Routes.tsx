//-----------------------------------------------------------------------
// <copyright file="Routes.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// React router routing setup
//-----------------------------------------------------------------------
import * as React from 'react';
import HomeComp from './components/Home';
import CustomerPage from './pages/customers/CustomerPage';
import OrderPage from './pages/orders/OrderPage';
import ProductPage from './pages/products/ProductPage';
import StatsPage from './pages/stats/StatsPage';
import { hot } from 'react-hot-loader';
import { Route } from "react-router-dom";

import HeaderComp from './components/layout/Header';
import FooterComp from './components/layout/Footer';

import CustomerCreatePage from './pages/customers/Customer-Create-Page';

const Routes = () => {
    return (
        <div>
            <HeaderComp />
            <Route path='/' exact component={ HomeComp } />
            <Route path='/customers' exact component={ CustomerPage } />
            <Route path='/customers/create' exact component={ CustomerCreatePage } />
            <Route path='/orders' exact component={ OrderPage } />
            <Route path='/products' exact component={ ProductPage } />
            <Route path='/stats' exact component={ StatsPage } />
            <FooterComp />
        </div>
        
    )
}

export default hot(module)(Routes);

