//-------------------------------------------------------------------------------
// <copyright file="ICustomer-Edit-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of component that represents creation of new customer
//--------------------------------------------------------------------------------

import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default interface ICustomerEditProps {

    title: string,
    data: [] | {  // Data that is passed to the modal if its available

        id: number,
        firstName: string,
        surname: string
    },
}