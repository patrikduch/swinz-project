//--------------------------------------------------------------------------------
// <copyright file="ICustomer-Deletion-Modal-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of customer`s deletion modal
//--------------------------------------------------------------------------------

export default interface ICustomerDeletionModalProps {
    customerId: number,
    deleteCustomer: Function
}