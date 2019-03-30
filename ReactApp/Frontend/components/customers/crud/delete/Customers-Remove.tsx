//-----------------------------------------------------------------------
// <copyright file="Customers-Remove.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Remove choosen customer
//-----------------------------------------------------------------------

import *  as React from 'react';
import ICustomerRemoveProps from '../../../../typescript/interfaces/components/customers/ICustomer-Remove-Props';

export default (props:any) => {
    console.log(props)
    return (
        <span>
            <button onClick={props.deleteCustomer}>Smazat</button>
        </span>  
    );
}