//-----------------------------------------------------------------------
// <copyright file="Customer-List-Body.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Content of customers list
//-----------------------------------------------------------------------

import * as React from 'react';

import CustomersItem from './Customers-List-Item';

export default (props:any) => {

    return <tbody>
        {props.data.map((arg: any) => {

            return <CustomersItem arg={ arg } />
        })}
    </tbody>
}

