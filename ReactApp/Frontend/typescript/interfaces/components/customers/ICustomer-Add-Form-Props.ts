//---------------------------------------------------------------------------------------
// <copyright file="ICustomer-Add-Form-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of component that represents form for creating new customer
//--------------------------------------------------------------------------------------

export default interface ICustomerAddFormProps {

    methods: Array<Function> // All methods that are present in the customer form
    toggler: Function // Separated method for closing modal after successfull customer creation
}