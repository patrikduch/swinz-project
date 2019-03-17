//-------------------------------------------------------------------------
// <copyright file="users-reducer.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux reducer for users
//-------------------------------------------------------------------------

// Import of all actions types
import * as actionTypes from '../../actions/action-types';
// Import initial state configuration
import initialState from '../../reducers/initial-state';

import Cookies from 'cookies-js';

// Reducer must be created before the store object
const reducer = (state : any = initialState.auth, action: any) => {

    switch(action.type) {

        case actionTypes.ADMIN_AUTH_SUCCESS: // Successfully signed in as the administrator

            Cookies.set('auth', action.data.token);

            return {
                ...state,
                token: action.data.token,
                isAuthenticated: true
            }

            case actionTypes.ADMIN_AUTH_FAILED: // Failed to login with credentials

            Cookies.set('auth', '');
            
            return {
                    ...state,
                    isAuthenticated: false
                }

        default:

            return state;
    }
};

export default reducer;