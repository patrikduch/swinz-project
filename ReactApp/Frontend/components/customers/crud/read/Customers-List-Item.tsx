//-----------------------------------------------------------------------
// <copyright file="Customer-List-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Single Content item of customers list
//-----------------------------------------------------------------------

import * as React from 'react';
import ICustomerListItemState from '../../../../typescript/interfaces/components/customers/ICustomer-List-Item-State';

// Remove customer`s modal
import CustomerDeletion from '../delete/modals/Customer-Deletion-Modal';

var uniqid = require('uniqid');


interface ICustomerListItemProps {
    arg: {
        id: number,
        firstName: string,
        lastName: string,

    },
    //iteration: number
    iteration: number,

    deleteCustomer: Function
}


// Styled helper
import styled from 'styled-components';

export default class CustomersListItem extends React.Component<ICustomerListItemProps, ICustomerListItemState> {

    render() {
        const CustomerListOptions = styled.span`

           margin-left: 10vw;
        `;

        return (
            <tr key={ uniqid() }>
                
                <th scope="row">{ this.props.iteration}</th>
                <td > { this.props.arg.firstName }</td>
                <td>{ this.props.arg.lastName }</td>
                <td>
                    <span>N/A</span>
                    <CustomerListOptions>
                        <span>Editovat</span>
                        <CustomerDeletion customerId={this.props.arg.id} deleteCustomer={this.props.deleteCustomer} />
                    </CustomerListOptions>
                </td>
            </tr>
        );
    }
}


