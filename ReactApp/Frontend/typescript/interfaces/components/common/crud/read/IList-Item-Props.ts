//-------------------------------------------------------------------------------------------
// <copyright file="IList-Item-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of individual item of the list
//--------------------------------------------------------------------------------------------

export default interface IListItemProps {
    iteration: number
    arg: {
        id: number,
        
    },

    deleteMethod: Function,
    updateMethod: Function,
    
    stats: boolean,
    crud: boolean,
    type: any // listing type
}