//-----------------------------------------------------------------------
// <copyright file="Customer-List-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Single Content item of customers list
//-----------------------------------------------------------------------

import * as React from 'react';

export default (props : any) => {

    return (<tr>
        <th scope="row">{props.arg.id}</th>
        <td>{props.arg.firstName}</td>
        <td>{props.arg.surname}</td>
    </tr>
    );
}