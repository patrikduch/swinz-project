//-----------------------------------------------------------------------
// <copyright file="ProductApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for products
//-----------------------------------------------------------------------

import { get, del, post, put } from '../utils/request-utils';

// Get domain for REST API services
import { domain } from '../utils/domain-utils';

export default class ProductApi {

    static createProduct(data: object) {        
        return post(`${domain}/api/products/create`, data)
    }
    static getProducts() {   
        return get(`${domain}/api/products/getAll`);
    }

    static updateProduct(id:number, data: object) {        
        return put(`${domain}/api/products/update/${id}`, data);
    }
    
    static deleteProduct(productId: number) {        
        return del(`${domain}/api/products/delete/`+productId);
    }
}
