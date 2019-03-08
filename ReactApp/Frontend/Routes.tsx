//-----------------------------------------------------------------------
// <copyright file="Routes.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// React router routing setup
//-----------------------------------------------------------------------
import * as React from 'react';
import HomeComp from './components/Home';
import CustomerPage from './pages/CustomerPage';
import OrderPage from './pages/OrderPage';
import ProductPage from './pages/ProductPage';
import StatsPage from './pages/StatsPage';
import { hot } from 'react-hot-loader';
import { Route } from "react-router-dom";

import HeaderComp from './components/layout/Header';
import FooterComp from './components/layout/Footer';

const Routes = () => {
    return (
        <div>
            <HeaderComp />
            <Route path='/' exact={true} component={ HomeComp } />
            <Route path='/customers' exact={true} component={ CustomerPage } />
            <Route path='/orders' exact={true} component={ OrderPage } />
            <Route path='/products' exact={true} component={ ProductPage } />
            <Route path='/stats' exact={true} component={ StatsPage } />
            <FooterComp />
        </div>
        
    )
}

export default hot(module)(Routes);

