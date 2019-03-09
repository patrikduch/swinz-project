//-----------------------------------------------------------------------
// <copyright file="CustomerPage.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer page
//-----------------------------------------------------------------------

import * as React from 'react';

import CustomersListComp from '../redux/containers/customers/Customer-List-Container';


export default  () => {

    return (
        <div>
            <CustomersListComp />
        </div>
    )
}