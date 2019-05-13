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

        // Fetching all orders
        case actionTypes.ORDER_FETCH_SUCCESS:
            return {
                ...state,
                data : action.payload.data
            }

        case actionTypes.ORDER_UPDATE_SUCCESS:

            const updatedData = state.data.map((arg: any) => {
                if (arg.id == action.data.data.id) {
                    arg = action.data.data;
                } 
                return arg;
            });

            return {
                ...state,
                data: updatedData
            }

        // Deletion of order 
        case actionTypes.ORDER_DELETION_SUCCESS:

            const newData = state.data.filter(((arg: any) => {
                return arg.id != action.orderId;
            }));
            
            return {
                ...state,
                data: newData
            }
        // Creation of new order
        case actionTypes.ORDER_CREATION_SUCCESS:

            let ordersResult = new Array();

            state.data.forEach((arg: any) => {
                ordersResult.push(arg);
            });
    
            ordersResult.push(action.data.data);

            return {
                ...state,
                data: ordersResult
            }
    
        default:

            return state;
    }
};

export default reducer;