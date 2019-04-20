//-----------------------------------------------------------------------
// <copyright file="CustomerApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for customers
//-----------------------------------------------------------------------

import { get, del, put, post} from '../utils/request-utils';

// Get domain for REST API services
import { CUSTOMER_REST_ENDPOINT } from '../utils/domain-utils';

export default class CustomerApi {

    static createCustomer(data: object) {        
        return post(`${CUSTOMER_REST_ENDPOINT}/api/customers/create`, data)
    }

    static getCustomers() {   
        return get(`${CUSTOMER_REST_ENDPOINT}/api/customers/getAll`);
    }

    static getCustomer(id: number) {   
        return get(`${CUSTOMER_REST_ENDPOINT}/api/customers/get/${id}`);
    }

    static updateCustomer(id:number, data: object) {        
        return put(`${CUSTOMER_REST_ENDPOINT}/api/customers/update/${id}`, data);
    }

    static deleteCustomer(customerId: number) {        
        return del(`${CUSTOMER_REST_ENDPOINT}/api/customers/delete/`+customerId);
    }
}
