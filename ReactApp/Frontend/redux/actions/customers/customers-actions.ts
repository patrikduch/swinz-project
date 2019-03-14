//-----------------------------------------------------------------------
// <copyright file="customers-actions.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// All customers actions that can be dispatched via Customer component
//-----------------------------------------------------------------------

// REST API
import CustomerApi from '../../../api/endpoints/CustomerApi';

// Alll redux action types
import * as actionTypes from '../../actions/action-types';

export const getCustomers : any = () => async (dispatch: Function) => {
        
    CustomerApi.getCustomers().then((data) => {

        dispatch({ type: actionTypes.CUSTOMER_FETCH_SUCCESS, data });

    }).catch(() => {

        dispatch({ type: actionTypes.CUSTOMER_FETCH_FAILED });
    });
}

export const deleteCustomer : any = (customerId: number) => async (dispatch: Function) => {
        
        CustomerApi.deleteCustomer(customerId).then(() => {

            dispatch({ type: actionTypes.CUSTOMER_DELETION_SUCCESS, customerId});
    
        }).catch(() => { // Error ocurred (REST API mostly)
    
            dispatch({ type: actionTypes.CUSTOMER_DELETION_FAILED});
        });
}


export const createCustomer : any = (customerObj: object) => async (dispatch: Function) => {
        
        const promiseResult = await CustomerApi.createCustomer(customerObj);
        const data = promiseResult.data;

        dispatch({ type: actionTypes.CUSTOMER_CREATION_SUCCESS, data});    
}