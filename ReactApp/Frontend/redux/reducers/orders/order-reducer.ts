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
const reducer = (state : any = initialState.orders, action: any) => {

    switch(action.type) {

        case actionTypes.ORDER_FETCH_SUCCESS:
            return {
                ...state,
                data : action.payload.data
            }

        case actionTypes.ORDER_DELETION_SUCCESS:

            const newData = state.data.filter(((arg: any) => {
                return arg.id != action.orderId;
            }));
            
            return {
                ...state,
                data: newData
            }

    
        default:

            return state;
    }
};

export default reducer;