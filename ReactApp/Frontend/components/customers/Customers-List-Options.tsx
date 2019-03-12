//-----------------------------------------------------------------------
// <copyright file="Customer-List-Options.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Container for all possible operations with customer (Delete, Edit)
//-----------------------------------------------------------------------

import * as React from 'react';

import ICustomerListOptionsProps from '../../typescript/interfaces/components/customers/ICustomer-List-Options-Props';

export default (props: ICustomerListOptionsProps) => {

    return (
        <td>
            { props.children }
        </td>
    )
}