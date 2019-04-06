//-------------------------------------------------------------------------
// <copyright file="product-reducer.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux reducer for products
//-------------------------------------------------------------------------

// Import of all actions types
import * as actionTypes from '../../actions/action-types';
// Import initial state configuration
import initialState from '../../reducers/initial-state';

// Reducer must be created before the store object
const reducer = (state : any = initialState.products, action: any) => {
    switch(action.type) {
        // Fetching all products
        case actionTypes.PRODUCT_FETCH_SUCCESS:
            return {
                ...state,
                data:action.data.data
            }
        // Deletion specific product by identifier
        case actionTypes.PRODUCT_DELETION_SUCCESS:
            const newData = state.data.filter(((arg: any) => {
                return arg.id != action.productId;
            }));
        return {
            ...state,
            data : newData
        }

        case actionTypes.PRODUCT_CREATION_SUCCESS: // Creation of new product

            let productResult = new Array();

            state.data.forEach((arg: any) => {
                productResult.push(arg);
            });

            productResult.push(action.result.data);

            return {
                ...state,
                data: productResult
            }

        // Update details of specific product
        case actionTypes.PRODUCT_UPDATE_SUCCESS:

        const updatedData = state.data.map((arg: any) => {
            if(arg.id == action.data.id) {
                arg.name = action.data.name;
                arg.price = action.data.price;
            }
            return arg;
        });

        return {
            ...state,
            data: updatedData
        }
        default:
            return state;
    }
};

export default reducer;