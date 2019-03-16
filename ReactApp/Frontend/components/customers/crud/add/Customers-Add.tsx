//-----------------------------------------------------------------------
// <copyright file="Customers-Add.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Add new customer
//-----------------------------------------------------------------------

import *  as React from 'react';
import CustomerModal from '../../../common/modals/Classic-Modal';
// Props interface
import ICustomerAddProps from '../../../../typescript/interfaces/components/customers/ICustomer-Add-Props';
// Form to invoke by CustomerModal
import CustomerAddForm from './forms/Customer-Add-Form';

export default (props:ICustomerAddProps) => {
    return (
        <span>
            <CustomerModal arg={null} data={CustomerAddForm} methods ={[props.addCustomer]} showModalBtn={false}  title={ props.title } btnIcon='plus'  />
        </span>
    );
}