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
import ICustomerListItemProps from '../../typescript/interfaces/components/customers/ICustomer-List-Item-Props';

export default (props:ICustomerListBodyProps) => {

    let counter = 1;

    return <tbody>
        {props.data.map((arg: ICustomerListItemProps) => {

            const dbId = arg.id; // Save identifier of customer from database
            arg.id = counter; // new id based on iterate thought the array
            counter++; // increment the printed identifier

            return <CustomersItem removeCustomer={ () => props.removeCustomer(dbId) } key={ arg.id } arg={ arg } />
        })}
    </tbody>
}

