//-----------------------------------------------------------------------
// <copyright file="Customer-List-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Single Content item of customers list
//-----------------------------------------------------------------------

import * as React from 'react';

import CustomerListOptions from './Customers-List-Options';
import CustomerEdit from './Customers-Edit';
import CustomerRemove from './Customers-Remove';


export default class CustomersListItem extends React.Component<any, any> {

    render() {

        const data = {

            id: this.props.arg.id,
            firstName: this.props.arg.firstName,
            surname: this.props.arg.surname
        }

        return (
            <tr>
                <th scope="row">{ this.props.test }</th>
                <td>{ this.props.arg.firstName }</td>
                <td>{ this.props.arg.surname }</td>

                <CustomerListOptions>
                    N/A

                        <CustomerRemove  customerId={this.props.arg.id} removeCustomer={ this.props.removeCustomer } />
                        &nbsp;
                        <CustomerEdit  title='Aktualizace zákaznika' data={ data } />
                </CustomerListOptions>
            </tr>
        );
    }
}


