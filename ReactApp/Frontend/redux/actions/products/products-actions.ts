//-----------------------------------------------------------------------
// <copyright file="products-actions.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// All products actions that can be dispatched via Product component
//-----------------------------------------------------------------------

// REST API
import ProductApi from '../../../api/endpoints/ProductApi';

// Alll redux action types
import * as actionTypes from '../../actions/action-types';
import { ActionCreator, Dispatch } from 'redux';

export const getProducts: ActionCreator<{}> = () => async (dispatch: Dispatch) => {
        
    ProductApi.getProducts().then((data) => {

        dispatch({ type: actionTypes.PRODUCT_FETCH_SUCCESS, data });

    }).catch(() => {

        dispatch({ type: actionTypes.PRODUCT_FETCH_FAILURE });
    });
}
