//--------------------------------------------------------------------------------------------
// <copyright file="IProduct-Update-Form-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of component that represents form for updating specific product
//--------------------------------------------------------------------------------------------

import Product from "../../../../../../view-models/Product";

export default interface IProductUpdateFormProps {
    data: Product // Passed product data
    updateMethod: Function
    modalToggler: Function
}