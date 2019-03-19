//-----------------------------------------------------------------------
// <copyright file="CustomerApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for customers
//-----------------------------------------------------------------------

import { get, del, put, post} from '../utils/request-utils';

export default class CustomerApi {

    static getCustomers() {        
        return get('http://localhost:63766/api/customers/getAll')
    }

    static deleteCustomer(customerId: number) {        
        return del('http://localhost:63766/api/customers/delete/'+customerId)
    }

    static createCustomer(data: object) {        
        return post('http://localhost:63766/api/customers/create', data)
    }

    static updateCustomer(arg:string, data: object) {        
        return put('http://localhost:63766/api/customers/update/', arg, data);
    }
}
