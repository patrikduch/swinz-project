//-----------------------------------------------------------------------
// <copyright file="Admin-Auth-Success.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Admin authentification was successfull component representation
//-----------------------------------------------------------------------

import * as React from 'react';
import { Button } from 'reactstrap';

import Cookies from 'cookies-js';

export default (props: any) => {

    const logout = () => {
        Cookies.expire('auth');
    }

    if (props.input.tokenString != '' && props.isNav) { // Content in navigation for admin users
        return <div>
            <div>
                <Button onClick={logout}>Odhlasit</Button>
            </div>
            {props.nestedChildren}
        </div>
    }

    else if (!props.isNav) {
        return props.nestedChildren;
    }
}