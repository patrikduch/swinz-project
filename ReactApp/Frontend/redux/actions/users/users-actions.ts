//-----------------------------------------------------------------------
// <copyright file="users-actions.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// All users actions that can be dispatched via User component
//-----------------------------------------------------------------------

// REST API
import UserApi from '../../../api/endpoints/UserApi';

// Alll redux action types
import * as actionTypes from '../../actions/action-types';
import { Dispatch, ActionCreator } from 'redux';

export const loginProcess : ActionCreator<{}> = (customerObj: object) => async (dispatch: Dispatch) => {
        
    UserApi.authenticate(customerObj).then((res) => {

        const data = res.data;

        dispatch({ type: actionTypes.ADMIN_AUTH_SUCCESS, data });

    }).catch(() => {

        dispatch({ type: actionTypes.ADMIN_AUTH_FAILED });
    });
}

