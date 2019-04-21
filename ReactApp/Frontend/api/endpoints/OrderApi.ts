//-----------------------------------------------------------------------
// <copyright file="CustomerApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for customers
//-----------------------------------------------------------------------

import { get, post} from '../utils/request-utils';

// Get domain for REST API services
import { ORDER_API_REST_ENDPOINT  } from '../utils/domain-utils';

export default class OrderApi {

    static createOrder(data: object) {        
        return post(`${ORDER_API_REST_ENDPOINT}/api/orders/create`, data)
    }

    static getOrders() {   
        return get(`${ORDER_API_REST_ENDPOINT}/api/orders/getAll`);
    }
}
