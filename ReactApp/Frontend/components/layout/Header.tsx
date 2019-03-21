//-----------------------------------------------------------------------
// <copyright file="Home.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Header component
//-----------------------------------------------------------------------

import * as React from 'react';

// Props interface
import IHeaderProps from '../../typescript/interfaces/components/layout/IHeader-Props';

export default (props:IHeaderProps) => {
    
    return (
        <header>
            {props.children}
        </header>
    )
}