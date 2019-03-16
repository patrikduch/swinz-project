//-----------------------------------------------------------------------
// <copyright file="ICustomer-List-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for customer`s list
//-----------------------------------------------------------------------

export default interface ICustomerListProps {
    actions: {
        getCustomers: Function // Get all customers from Db
        updateCustomer: Function // Customer update method
        deleteCustomer: Function // Customer delete method
        createCustomer: Function // Customer create method
    },

    customers: [] // Customer list of objects
}