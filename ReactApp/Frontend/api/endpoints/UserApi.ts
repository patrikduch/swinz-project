//-----------------------------------------------------------------------
// <copyright file="UserApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for users
//-----------------------------------------------------------------------

import { post} from '../utils/request-utils';

import { USER_API_REST_ENDPOINT } from '../utils/domain-utils';

export default class UserApi {

    static authenticate(data: object) {        
        return post(`${USER_API_REST_ENDPOINT}/api/users/authenticate`, data)
    }

    static isAuthenticated(data: object) {        
        return post(`${USER_API_REST_ENDPOINT}/api/users/isAuthenticated`, data);
    }
}
