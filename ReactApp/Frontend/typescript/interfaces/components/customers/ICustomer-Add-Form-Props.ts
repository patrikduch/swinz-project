//---------------------------------------------------------------------------------------
// <copyright file="ICustomer-Add-Form-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of component that represents form for creating new customer
//--------------------------------------------------------------------------------------

export default interface ICustomerAddFormProps {
    modalToggler: Function // Function for closing modal after new customer is completed
    createCustomer: Function
}