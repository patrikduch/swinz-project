//---------------------------------------------------------------------------------------
// <copyright file="List-Body.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Generator of list content
//----------------------------------------------------------------------------------------

// React depedency
import * as React from 'react';
// Renderer helper
import { getUniqueId } from '../../../../helpers/components/rendererHelper';
import ListItem from '../read/List-Item';
// Props interface
import IListBodyProps from '../../../../typescript/interfaces/components/common/crud/read/IList-Body-Props';

export default (props: IListBodyProps) => {
    if (props.data != undefined) {
        let counter = 0; // For list identifier
        return <tbody>
            {
                props.data.objects.length == 0  && <tr><td>{props.emptyError}</td></tr>
            }
            {
                props.data.objects.map((arg: any) => {       
                counter++; // Next item index of the customer`s list
                return <ListItem key={ getUniqueId() }
                        type={props.type}
                        iteration={ counter }
                        stats ={props.stats}
                        deleteMethod={props.deleteMethod}
                        arg={ arg } />
            })}
        </tbody>
    }
    return null;
}


