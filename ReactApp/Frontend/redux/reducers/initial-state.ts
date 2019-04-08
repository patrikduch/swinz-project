//-----------------------------------------------------------------------
// <copyright file="initial-state.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Initial state for Redux heavy-weight object
//-----------------------------------------------------------------------

export default {
    customers: [], // list of customers
    products: [], // list of products
    users: [], // list of users
    orders: [], // list of orders
    auth: {
        token: '',
        isAuthenticated: false
    }
}