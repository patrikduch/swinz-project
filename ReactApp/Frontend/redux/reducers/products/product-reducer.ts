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
        default:
            return state;
    }
};

export default reducer;