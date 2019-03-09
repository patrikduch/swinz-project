//-------------------------------------------------------------------------
// <copyright file="index.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// All reducers that are converted into one root reducer
//-------------------------------------------------------------------------
import { combineReducers } from 'redux';

// All reducers that are merged into main one
import customerReducer from '../reducers/customers/customer-reducer';

// Merge process of all reducers
export default combineReducers({
    customers: customerReducer,
});

