//-----------------------------------------------------------------------
// <copyright file="index.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Entry point to the frontend part of application
//-----------------------------------------------------------------------
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';

renderApp(); // Initial inject of app

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
