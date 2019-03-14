//-----------------------------------------------------------------------
// <copyright file="Customer-List-Body.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Content of customers list
//-----------------------------------------------------------------------

import * as React from 'react';

import CustomersItem from './Customers-List-Item';

// Props interface (List body)
import ICustomerListBodyProps from '../../../../typescript/interfaces/components/customers/ICustomer-List-Body-Props';
// Props interface (List item)
import ICustomerListItemProps from '../../../../typescript/interfaces/components/customers/ICustomer-List-Item-Props';

var uniqid = require('uniqid');

export default (props:ICustomerListBodyProps) => {

    let counter = 0; // For list identifier

    return <tbody>
        {props.data.map((arg: ICustomerListItemProps) => {
            counter++; // Next item index of the customer`s list
            return <CustomersItem key={uniqid.process()} removeCustomer={ props.removeCustomer } iteration={counter}  arg={ arg } />
        })}
    </tbody>
}

