import Customer from "../../../../../view-models/Customer";

//--------------------------------------------------------------------------------------------
// <copyright file="ICustomer-Update-Form-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of component that represents form for updating specific customer
//--------------------------------------------------------------------------------------------

export default interface ICustomerUpdateFormProps {

    updateMethod: Function,
    modalToggler: Function,
    data: Customer

}