//-------------------------------------------------------------------------------------------
// <copyright file="IList-Item-Deletion-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of general list item deletion
//--------------------------------------------------------------------------------------------

export default interface IListItemDeletionProps {
    itemIdentifier : number // Identifier of object that will be deleted
    deleteMethod: Function
}