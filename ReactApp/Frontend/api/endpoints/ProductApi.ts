//-----------------------------------------------------------------------
// <copyright file="ProductApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for products
//-----------------------------------------------------------------------

import { get, del, post, put } from '../utils/request-utils';

// Get domain for REST API services
import { ORDER_API_REST_ENDPOINT } from '../utils/domain-utils';

export default class ProductApi {

    static createProduct(data: object) {        
        return post(`${ORDER_API_REST_ENDPOINT}/api/products/create`, data)
    }
    static getProducts() {   
        return get(`${ORDER_API_REST_ENDPOINT}/api/products/getAll`);
    }
    
    static getProductsWithPaging(data: object) {   
        return post(`${ORDER_API_REST_ENDPOINT}/api/products/getAllPager`, data);
    }

    static getProductPagination() {
        return get(`${ORDER_API_REST_ENDPOINT}/api/products/paginationInfo`);
    }

    static updateProduct(id:number, data: object) {        
        return put(`${ORDER_API_REST_ENDPOINT}/api/products/update/${id}`, data);
    }
    
    static deleteProduct(productId: number) {        
        return del(`${ORDER_API_REST_ENDPOINT}/api/products/delete/`+productId);
    }
}
