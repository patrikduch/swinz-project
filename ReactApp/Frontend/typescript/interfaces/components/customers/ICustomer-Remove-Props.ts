//-----------------------------------------------------------------------
// <copyright file="ICustomer-Remove-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for customer deletion
//-----------------------------------------------------------------------

export default interface ICustomerRemoveProps {
    removeCustomer: Function // Method for customer deletion
    customerId: number // Identifier of customer
}