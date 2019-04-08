//-------------------------------------------------------------------------
// <copyright file="order-reducer.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux reducer for orders
//-------------------------------------------------------------------------

// Import of all actions types
import * as actionTypes from '../../actions/action-types';
// Import initial state configuration
import initialState from '../../reducers/initial-state';

// Reducer must be created before the store object
const reducer = (state : any = initialState.orders, action: {type: string, payload: {
    data: [],
}}) => {

    switch(action.type) {

        case actionTypes.ORDER_FETCH_SUCCESS:

            return {
                ...state = action.payload.data
            }

    
        default:

            return state;
    }
};

export default reducer;