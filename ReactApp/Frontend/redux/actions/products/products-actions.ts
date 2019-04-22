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

export const createProduct : ActionCreator<{}> = (productObj: object) => async (dispatch: Dispatch) => {
        
    ProductApi.createProduct(productObj).then((result:any) => {
        dispatch({ type: actionTypes.PRODUCT_CREATION_SUCCESS, result });

    }).catch(() => {

        dispatch({ type: actionTypes.PRODUCT_CREATION_FAILURE });
    });
}

export const getProducts: ActionCreator<{}> = () => async (dispatch: Dispatch) => {
        
    ProductApi.getProductsWithPaging({
        pageIdentifier: 1
    }).then((data) => {

        dispatch({ type: actionTypes.PRODUCT_FETCH_SUCCESS, data });

    }).catch(() => {

        dispatch({ type: actionTypes.PRODUCT_FETCH_FAILURE });
    });
}



export const getProductsWithPagination: ActionCreator<{}> = (pageId: number) => async (dispatch: Dispatch) => {
        
    const test = {
        pageIdentifier: pageId
    }

    ProductApi.getProductsWithPaging(test).then((data) => {

        dispatch({ type: actionTypes.PRODUCT_FETCH_WITH_PAGINATION_SUCCESS, data });

    }).catch(() => {

        
    });
}




export const updateProduct : ActionCreator<{}> = (productObj: any) => async (dispatch: Dispatch) => {    
    
    ProductApi.updateProduct(productObj.id, {
        id: productObj.id,
        name: productObj.name,
        price: productObj.price
    }).then((result) => {
        const data = result.data;
        dispatch({ type: actionTypes.PRODUCT_UPDATE_SUCCESS, data});  
    }).catch(() => {
        dispatch({ type: actionTypes.PRODUCT_UPDATE_FAILURE});
    }); 
}


export const deleteProduct : ActionCreator<{}> = (productId: number) => async (dispatch: Dispatch) => {
        
    ProductApi.deleteProduct(productId).then(() => {

        dispatch({ type: actionTypes.PRODUCT_DELETION_SUCCESS, productId});

    }).catch(() => { // Error ocurred (REST API mostly)

        dispatch({ type: actionTypes.PRODUCT_DELETION_FAILURE});
    });
}




