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

    static createCustomer(data: object) {        
        return post(`${domain}/api/customers/create`, data)
    }

    static getCustomers() {   
        return get(`${domain}/api/customers/getAll`);
    }

    static updateCustomer(id:number, data: object) {        
        return put(`${domain}/api/customers/update/${id}`, data);
    }

    static deleteCustomer(customerId: number) {        
        return del(`${domain}/api/customers/delete/`+customerId);
    }
}
