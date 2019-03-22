//---------------------------------------------------------------------------------------
// <copyright file="ICustomer-List-Container-State.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for propeties of customer`s redux container
//----------------------------------------------------------------------------------------

export default interface ICustomerListContainerState {
    customers: {
        data: []
    }
}