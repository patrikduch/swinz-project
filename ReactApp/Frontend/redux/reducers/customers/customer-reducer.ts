//-------------------------------------------------------------------------
// <copyright file="customer-reducer.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux reducer for cu(stomers
//-------------------------------------------------------------------------

// Import of all actions types
import * as actionTypes from '../../actions/action-types';
// Import initial state configuration
import initialState from '../../reducers/initial-state';

// Reducer must be created before the store object
const reducer = (state : any = initialState.customers, action: any) => {

    switch(action.type) {

        // Fetching all customers
        case actionTypes.FETCH_CUSTOMERS:
            return {
                ...state,
                data: action.data.data
            }
        case actionTypes.CREATE_USER_SUCCESS:

            const arr = state.data as any;
            arr.push(action.data);

            console.log(arr);

            return {

                ...state,
                data: arr
            }
            
        // Change after removing customer
        case actionTypes.DELETE_CUSTOMER:
        
            const newData = state.data.filter(((arg: any) => {

                return arg.id != action.customerId;
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