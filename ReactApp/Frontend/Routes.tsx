//-----------------------------------------------------------------------
// <copyright file="Routes.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// React router routing setup
//-----------------------------------------------------------------------
import * as React from 'react';
import HomeComp from './components/Home';
import { hot } from 'react-hot-loader';
import { Route } from "react-router-dom";

import HeaderComp from './components/layout/Header';

const Routes = () => {
    return (
        <div>
            <HeaderComp/>
            <Route path='/' exact={true} component={ HomeComp } />
        </div>
        
    )
}

export default hot(module)(Routes);

