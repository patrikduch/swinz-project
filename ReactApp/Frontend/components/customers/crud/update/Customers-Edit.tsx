//-----------------------------------------------------------------------
// <copyright file="Customers-Edit.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Edit of specific customer from the list
//-----------------------------------------------------------------------

import *  as React from 'react';
import CustomerModal from '../../../common/modals/Classic-Modal';

// Props interface
import ICustomerEditProps from '../../../../typescript/interfaces/components/customers/ICustomer-Edit-Props';

export default (props: ICustomerEditProps) => {

    return (
        <span>
            <CustomerModal methods ={[props.method]} showModalBtn={ true }  title={ props.title } arg={props.arg} data = { props.data } btnIcon='edit' />
        </span>
    );


}