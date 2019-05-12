//-----------------------------------------------------------------------
// <copyright file="order-actions.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// All orders actions that can be dispatched via Order component
//-----------------------------------------------------------------------

// REST API
import OrderApi from '../../../api/endpoints/OrderApi';

// Alll redux action types
import * as actionTypes from '../../actions/action-types';
import { ActionCreator, Dispatch } from 'redux';

// Creation of new order
export const createOrder : ActionCreator<{}> = (inputData: object) => async (dispatch: Dispatch) => {
        
    OrderApi.createOrder(inputData).then((data) => {

        dispatch({ type: actionTypes.ORDER_CREATION_SUCCESS, data});

    }).catch(() => { // Error ocurred (REST API mostly)

        dispatch({ type: actionTypes.ORDER_CREATION_FAILURE});
    });
}

// Get all orders
export const getOrders: ActionCreator<{}> = () => async (dispatch: Dispatch) => {
        
    OrderApi.getOrders().then((payload) => {

        dispatch({ type: actionTypes.ORDER_FETCH_SUCCESS, payload });

    }).catch(() => {

        dispatch({ type: actionTypes.ORDER_FETCH_FAILURE });
    });
}

// Deletion of specific order
export const deleteOrder : ActionCreator<{}> = (orderId: number) => async (dispatch: Dispatch) => {
        
    OrderApi.deleteOrder(orderId).then(() => {

        dispatch({ type: actionTypes.ORDER_DELETION_SUCCESS, orderId});

    }).catch(() => { // Error ocurred (REST API mostly)

        dispatch({ type: actionTypes.ORDER_DELETION_FAILURE});
    });
}

