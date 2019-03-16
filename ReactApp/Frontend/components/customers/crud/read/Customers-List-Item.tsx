//-----------------------------------------------------------------------
// <copyright file="Customer-List-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Single Content item of customers list
//-----------------------------------------------------------------------

import * as React from 'react';

import CustomerListOptions from './Customers-List-Options';
import CustomerRemove from '../delete/Customers-Remove';
import EditCustomer from '../update/Customers-Edit';

import ICustomerListItemState from '../../../../typescript/interfaces/components/customers/ICustomer-List-Item-State';

import EditCustomerForm from '../update/forms/Customer-Edit-Form';

var uniqid = require('uniqid');


interface ICustomerListItemProps {
    arg: {
        id: number,
        firstName: string,
        surname: string,

    },
    //iteration: number
    removeCustomer: Function,
    updateCustomer: Function,
    iteration: number
}



export default class CustomersListItem extends React.Component<ICustomerListItemProps, ICustomerListItemState> {


    render() {
        return (
            <tr key={ uniqid() }>
                <th scope="row">{ this.props.iteration}</th>
                <td >{ this.props.arg.firstName }</td>
                <td>{ this.props.arg.surname }</td>

                <CustomerListOptions>
                    N/A
                        <CustomerRemove  customerId={this.props.arg.id} removeCustomer={ this.props.removeCustomer } />
                        <EditCustomer title='Úprava detailů zákazníka' method={this.props.updateCustomer} data={ EditCustomerForm} arg={this.props.arg} />
                </CustomerListOptions>
            </tr>
        );
    }
}

