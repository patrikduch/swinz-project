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
import { ActionCreator, Dispatch } from 'redux';

export const getCustomers: ActionCreator<{}> = () => async (dispatch: Dispatch) => {
        
    CustomerApi.getCustomers().then((data) => {

        dispatch({ type: actionTypes.CUSTOMER_FETCH_SUCCESS, data });

    }).catch(() => {

        dispatch({ type: actionTypes.CUSTOMER_FETCH_FAILED });
    });
}

export const deleteCustomer : ActionCreator<{}> = (customerId: number) => async (dispatch: Dispatch) => {
        
        CustomerApi.deleteCustomer(customerId).then(() => {

            dispatch({ type: actionTypes.CUSTOMER_DELETION_SUCCESS, customerId});
    
        }).catch(() => { // Error ocurred (REST API mostly)
    
            dispatch({ type: actionTypes.CUSTOMER_DELETION_FAILED});
        });
}


export const createCustomer : ActionCreator<{}> = (customerObj: object) => async (dispatch: Dispatch) => {
        
        const promiseResult = await CustomerApi.createCustomer(customerObj);
        const data = promiseResult.data;

        dispatch({ type: actionTypes.CUSTOMER_CREATION_SUCCESS, data});    
}


export const updateCustomer : ActionCreator<{}> = (customerObj: any) => async (dispatch: Dispatch) => {        
    const promiseResult = await CustomerApi.updateCustomer(customerObj.id, {
        firstname: customerObj.firstname,
        lastname: customerObj.lastname
    });

    const data = promiseResult.data;

    dispatch({ type: actionTypes.CUSTOMER_UPDATE_SUCCESS, data});    
}