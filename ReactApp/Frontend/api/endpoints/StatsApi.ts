//-----------------------------------------------------------------------
// <copyright file="StatsApi.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Rest API for customers
//-----------------------------------------------------------------------

import { get } from '../utils/request-utils';

// Get domain for REST API services
import { STATS_API_REST_ENDPOINT } from '../utils/domain-utils';

export default class CustomerApi {

    static getCustomerSummary() {   
        return get(`${STATS_API_REST_ENDPOINT}/api/stats/customers/summary`);
    }

    static getSummaryGraphData() {   
        return get(`${STATS_API_REST_ENDPOINT}/api/stats/customers/graph/summary`);
    }

    static getAvgValuationGraphData() {   
        return get(`${STATS_API_REST_ENDPOINT}/api/stats/customers/graph/average/summary`);
    }
}
