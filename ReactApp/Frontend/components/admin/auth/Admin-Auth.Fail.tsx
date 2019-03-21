//-----------------------------------------------------------------------
// <copyright file="Admin-Auth-Fail.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Admin authentification has failed component representation
//-----------------------------------------------------------------------
import * as React from 'react';
import { Link } from 'react-router-dom';

export default (props:any) => {

    if (props.isNav) {
        return (
            <div>
                <Link to='/login'>Administrace</Link>
            </div>
        )
    }

    return null;
}