//-------------------------------------------------------------------------------------------
// <copyright file="IList-Item-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of individual item of the list
//--------------------------------------------------------------------------------------------

export default interface IListItemProps {
    iteration: number
    updateMethod : Function
    deleteMethod: Function
    arg: {
        id: number,
        
    }
}