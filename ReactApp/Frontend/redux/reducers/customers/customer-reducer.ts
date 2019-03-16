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
        case actionTypes.CUSTOMER_FETCH_SUCCESS:
            return {
                ...state,
                data: action.data.data
            }
        case actionTypes.CUSTOMER_CREATION_SUCCESS: // Creation of new customer

            let customersResult = new Array();
            
            state.data.forEach((arg: any) => {

                customersResult.push(arg);
            });

            customersResult.push(action.data);


            return {
                ...state,
                data: customersResult
            }

        // Update credentials of specific customer
        case actionTypes.CUSTOMER_UPDATE_SUCCESS:

            const updatedData = state.data.map((arg: any) => {
                if(arg.id == action.data.id) {
                    arg.firstName = action.data.firstName;
                    arg.surname = action.data.surname;
                }
                return arg;
            });

            return {
                ...state,
                data: updatedData
            }
            
        // Change after removing customer
        case actionTypes.CUSTOMER_DELETION_SUCCESS:
        
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