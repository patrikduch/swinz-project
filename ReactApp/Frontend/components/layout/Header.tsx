//-----------------------------------------------------------------------
// <copyright file="Home.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Header component
//-----------------------------------------------------------------------

import * as React from 'react';
import Navbar from '../common/navigation/NavBar';
import Navigation from '../common/navigation/Navigation';

// Auth process
import AdminAuth from '../../hoc/authentication/Admin-Auth';

export default () => {

    return (
        <header>
            <Navbar title='Fakturační systém' />
            
            <AdminAuth>
                 <Navigation />
            </AdminAuth>
            
        </header>
    )
}