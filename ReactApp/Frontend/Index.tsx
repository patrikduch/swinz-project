﻿//-----------------------------------------------------------------------
// <copyright file="index.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Entry point to the frontend part of application
//-----------------------------------------------------------------------

// Bootstrap style import
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/_Base.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';

import Api from './api/endpoints/CustomerApi';

renderApp(); // Initial inject of app

const test = Api.getProjectName();

console.log(test);


function renderApp() {
    ReactDOM.render(
    <div>
        <AppContainer>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </AppContainer>
    </div>,
                
    document.getElementById('root'));
}


// Only for development
if (module.hot) {
    module.hot.accept('./Routes', () => {
        renderApp();
    });
}
