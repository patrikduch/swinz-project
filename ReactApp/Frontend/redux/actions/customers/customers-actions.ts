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
        dispatch({ type: actionTypes.FETCH_CUSTOMERS, data });
    })
}

export const deleteCustomer : any = (customerId: number) => async (dispatch: Function) => {
        
    try {

        CustomerApi.deleteCustomer(customerId).then(() => {

            dispatch({ type: actionTypes.DELETE_CUSTOMER, customerId});
    
        }).catch(() => {
    
            console.log('err');
    
        })


    } catch(err) {

    }
    
}


export const createCustomer : any = (data: object) => async (dispatch: Function) => {
        
    try {

        CustomerApi.createCustomer(data).then(() => {

            dispatch({ type: actionTypes.CREATE_USER_SUCCESS, data});
    
        }).catch(() => {
    
            dispatch({ type: actionTypes.CREATE_USER_FAILURE});
    
        })


    } catch(err) {

    }
    
}