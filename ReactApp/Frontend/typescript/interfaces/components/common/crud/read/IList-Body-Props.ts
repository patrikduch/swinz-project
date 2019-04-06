import { ListItemType } from './../../../../../enums/crud/List-Item-Type';
//-------------------------------------------------------------------------------------------
// <copyright file="IList-Body-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of component that generates content of list
//--------------------------------------------------------------------------------------------

export default interface IListBodyProps {

    deleteMethod: Function
    updateMethod: Function
    data: {
        objects: []
    }

    type: any // type of listing

    emptyError: string // Error message that will be displayed if list is empty
    
}