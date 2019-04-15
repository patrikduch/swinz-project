//-----------------------------------------------------------------------
// <copyright file="StatsApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for customers
//-----------------------------------------------------------------------

import { get, del, put, post} from '../utils/request-utils';

// Get domain for REST API services
import { domain } from '../utils/domain-utils';

export default class CustomerApi {

    static getCustomerSummary() {   
        return get(`http://localhost:59394/api/stats/customers/summary`);
    }
}
