//-----------------------------------------------------------------------
// <copyright file="CustomerApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for customers
//-----------------------------------------------------------------------

import { newGet } from '../utils/request-utils';

export default class CustomerApi {

    static getCustomers() {        
        return newGet ('http://localhost:64097/api/customers')
    }
}
