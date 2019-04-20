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

export default class OrderApi {

    static createOrder(data: object) {        
        return post(`${domain}/api/orders/create`, data)
    }

    static getOrders() {   
        return get(`http://localhost:55941/api/orders/getAll`);
    }
}
