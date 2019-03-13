//-----------------------------------------------------------------------
// <copyright file="Customers-Add.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Add new customer
//-----------------------------------------------------------------------

import *  as React from 'react';
import CustomerModal from '../common/modals/Classic-Modal';

import ICustomerAddProps from '../../typescript/interfaces/components/customers/ICustomer-Add-Props';

export default (props:ICustomerAddProps) => {
    
    return (
        <span>
            <CustomerModal data={null} title={ props.title } btnIcon='plus'  />
        </span>
    );


}