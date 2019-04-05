//---------------------------------------------------------------------------------------
// <copyright file="List-Body.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Generator of list content
//----------------------------------------------------------------------------------------

import * as React from 'react';

// Renderer helper
import { getUniqueId} from '../../../../helpers/components/rendererHelper';

import ListItem from '../read/List-Item';

export default (props:any) => {

    if (props.data != undefined) {

      let counter = 0; // For list identifier

    return <tbody>
        {
            props.data.length == 0 && <tr><td>Seznam zákazníků je prázdný</td></tr>
        }

        {
            props.data.objects.map((arg: any) => {
                
            counter++; // Next item index of the customer`s list
            return <ListItem key={ getUniqueId() }
                     updateMethod={props.updateMethod}
                     deleteMethod={props.deleteMethod}
                     iteration={ counter }
                     arg={ arg } />
        })}
    </tbody>

    }

    return null;
    
}


