//-----------------------------------------------------------------------
// <copyright file="Customer-List-Body.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Content of customers list
//-----------------------------------------------------------------------

import * as React from 'react';

import CustomersItem from './Customers-List-Item';

// Iterface for exported component props
import ICustomerListBodyProps from '../../typescript/interfaces/components/customers/ICustomer-List-Body-Props';

export default (props:ICustomerListBodyProps) => {

    return <tbody>
        {props.data.map((arg: any) => {

            return <CustomersItem removeCustomer={props.removeCustomer} key={arg.id} arg={ arg } />
        })}
    </tbody>
}

