//-----------------------------------------------------------------------
// <copyright file="Home.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Header component
//-----------------------------------------------------------------------

import * as React from 'react';


// Auth process
import AdminAuth from '../../hoc/authentication/Admin-Auth';

export default (props:any) => {

    return (
        <header>
            {props.children}
        </header>
    )
}