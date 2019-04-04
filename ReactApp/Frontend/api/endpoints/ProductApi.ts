//-----------------------------------------------------------------------
// <copyright file="ProductApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for products
//-----------------------------------------------------------------------

import { get } from '../utils/request-utils';

// Get domain for REST API services
import { domain } from '../utils/domain-utils';

export default class ProductApi {

    static getProducts() {   
        return get(`${domain}/api/products/getAll`);
    }
}
