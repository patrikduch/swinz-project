//-----------------------------------------------------------------------
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

//React Redux dependencies
import { Provider } from 'react-redux'
import store from './redux/store/create-Store';

// FA integration
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinusCircle, faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus);
library.add(faMinusCircle);
library.add(faEdit);

renderApp(); // Initial inject of app


function renderApp() {

    ReactDOM.render(
    <div>
        <AppContainer>
            <Provider store={store()}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            </Provider>
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
