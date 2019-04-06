//-------------------------------------------------------------------------------------------
// <copyright file="IList-Item-Creation-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of generic creation form
//--------------------------------------------------------------------------------------------

import { ListItemType } from './../../../../../enums/crud/List-Item-Type';

export default interface IListItemCreationProps {

    createMethod: Function,
    type: ListItemType

}