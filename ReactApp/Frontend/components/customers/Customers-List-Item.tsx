//-----------------------------------------------------------------------
// <copyright file="Customer-List-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Single Content item of customers list
//-----------------------------------------------------------------------

import * as React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class CustomersListItem extends React.Component<any, any> {

    removeCustomer = (customerId: number) => {
        this.props.removeCustomer(customerId);
    }

    render() {

        return (<tr>
            <th scope="row">{this.props.arg.id}</th>
            <td>{this.props.arg.firstName}</td>
            <td>{this.props.arg.surname}</td>
            <td>N/A <Button onClick={() => this.props.removeCustomer(this.props.arg.id)} className='list-delete-btn' color="danger" size="sm"><FontAwesomeIcon icon="minus-circle" /></Button> <Button color="secondary" size="sm"><FontAwesomeIcon icon="edit" /></Button></td>
        </tr>
        );
    }
}


