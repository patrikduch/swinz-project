//-------------------------------------------------------------------------------
// <copyright file="ICustomer-Add-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of component that represents creation of new customer
//--------------------------------------------------------------------------------

import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default interface ICustomerAddProps {
    title: string,
    btnIcon: IconProp,
    data: any
}