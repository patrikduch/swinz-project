//-----------------------------------------------------------------------
// <copyright file="UserApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for users
//-----------------------------------------------------------------------

import { post} from '../utils/request-utils';

export default class UserApi {

    static authenticate(data: object) {        
        return post('http://localhost:63766/api/users/authenticate', data)
    }

    static isAuthenticated(data: object) {        

        return post('http://localhost:63766/api/users/isAuthenticated', data);

        
        

    }
}
