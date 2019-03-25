//-----------------------------------------------------------------------
// <copyright file="CustomerApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for customers
//-----------------------------------------------------------------------

import { get, del, put, post} from '../utils/request-utils';

// Get domain for REST API services
import { domain } from '../utils/domain-utils';

export default class CustomerApi {

    static getCustomers() {   
        return get(`${domain}/api/customers/getAll`);
    }

    static deleteCustomer(customerId: number) {        
        return del(`${domain}/api/customers/delete/`+customerId);
    }

    static createCustomer(data: object) {        
        return post(`${domain}/api/customers/create`, data)
    }

    static updateCustomer(arg:string, data: object) {        
        return put(`${domain}/api/customers/update/`, arg, data);
    }
}
