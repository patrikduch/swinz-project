//-------------------------------------------------------------------------
// <copyright file="customer-reducer.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux reducer for customers
//-------------------------------------------------------------------------

// Import of all actions types
import * as actionTypes from '../../actions/action-types';
// Import initial state configuration
import initialState from '../../reducers/initial-state';

// Reducer must be created before the store object
const reducer = (state : any = initialState.customers, action: any) => {

    switch(action.type) {

        case actionTypes.FETCH_CUSTOMERS:
            return {
                ...state,
                data: action.data.data
            }
    
        default:

            return state;
    }
};

export default reducer;