//-----------------------------------------------------------------------
// <copyright file="Customer-List-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Single Content item of customers list
//-----------------------------------------------------------------------

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'reactstrap';

import CustomerEdit from './Customers-Edit';


export default class CustomersListItem extends React.Component<any, any> {

    removeCustomer = (customerId: number) => {
        this.props.removeCustomer(customerId);
    }

    render() {

        const data = {

            id: this.props.arg.id,
            firstName: this.props.arg.firstName,
            surname: this.props.arg.surname
        }

        return (<tr>
            <th scope="row">{this.props.arg.id}</th>
            <td>{this.props.arg.firstName}</td>
            <td>{this.props.arg.surname}</td>
            <td>N/A <Button onClick={() => this.props.removeCustomer(this.props.arg.id)} className='list-delete-btn' color="danger" size="sm"><FontAwesomeIcon icon="minus-circle" /></Button>
            
             <CustomerEdit title='Aktualizace zákaznika' data = { data } />
             
     
             
             </td>
        </tr>
        );
    }
}


