//--------------------------------------------------------------------------
// <copyright file="create-Store.ts" website="Patrikduch.com">
//     Copyright 2018 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Client side configuration for redux store (CSR - Client-Side-Rendering)
//--------------------------------------------------------------------------

import { createStore, applyMiddleware, compose } from 'redux';
// Support of async operatiosn in Store heavy-weight object
import thunk from 'redux-thunk';
// Initial state for redux-store object
import initialState from '../reducers/initial-state';
// Get the root reducer
import reducers from '../reducers';

export default () => {
    // DEV TOOLS extension
    const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducers, initialState as any, composeEnhancers(applyMiddleware(thunk)));   
}