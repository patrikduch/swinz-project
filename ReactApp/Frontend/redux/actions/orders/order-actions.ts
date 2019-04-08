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


export const createOrder: ActionCreator<{}> = () => async (dispatch: Dispatch) => {
        
}


export const getOrders: ActionCreator<{}> = () => async (dispatch: Dispatch) => {
        
    OrderApi.getOrders().then((payload) => {

        dispatch({ type: actionTypes.ORDER_FETCH_SUCCESS, payload });

    }).catch(() => {

        dispatch({ type: actionTypes.ORDER_FETCH_FAILURE });
    });
}
