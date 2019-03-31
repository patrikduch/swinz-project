//-----------------------------------------------------------------------
// <copyright file="ICustomer-List-Body-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for component which represents content of Customer list
//-----------------------------------------------------------------------

export default interface ICustomerListBodyProps {
    data: [],
    deleteCustomer: Function // Passed removal customer method
    updateCustomer: Function
}