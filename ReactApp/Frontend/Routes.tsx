//-----------------------------------------------------------------------
// <copyright file="Routes.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// React router routing setup
//-----------------------------------------------------------------------
import * as React from 'react';
import HomeComp from './pages/Home-Page';
import CustomerPage from './pages/customers/CustomerPage';
import OrderPage from './pages/orders/OrderPage';
import ProductPage from './pages/products/ProductPage';
import StatsPage from './pages/stats/StatsPage';
import LoginPage from './redux/containers/login/Login-Page-Container';
import { hot } from 'react-hot-loader';
import { Route } from "react-router-dom";

import HeaderComp from './components/layout/Header';
import FooterComp from './components/layout/Footer';

import AdminAuth from './hoc/authentication/Admin-Auth';


import Navbar from './components/common/navigation/NavBar';
import Navigation from './components/common/navigation/Navigation';


const Routes = () => {
    return (
        <div>
            <HeaderComp>
                <Navbar title='Fakturační systém' /> 
                <AdminAuth isNav>
                    <Navigation />
                </AdminAuth>
            </HeaderComp>
            
            <Route path='/login' exact component={ LoginPage } />
            <AdminAuth isNav={false}>
                <Route path='/' exact component={ HomeComp } />
                <Route path='/customers' exact component={ CustomerPage } />
                <Route path='/orders' exact component={ OrderPage } />
                <Route path='/products' exact component={ ProductPage } />
                <Route path='/stats' exact component={ StatsPage } />
            </AdminAuth>

            <FooterComp />
        </div>

    )
}

export default hot(module)(Routes);

