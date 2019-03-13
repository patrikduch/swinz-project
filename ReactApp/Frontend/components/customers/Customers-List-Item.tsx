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

interface ICustomerListItemProps {
    arg: {
        id: number,
        firstName: string,
        surname: string,

    },
    iteration: number
    removeCustomer: Function
}

interface ICustomerListItemState {
    
}


import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="firstnameLabel">Firstname</Label>
          <Input type="text" name="firstnameInput" id="firstnameInputId" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="surnameLabel">Surname</Label>
          <Input type="text" name="surnameInput" id="surnameInputId" placeholder="" />
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default class CustomersListItem extends React.Component<ICustomerListItemProps, ICustomerListItemState> {

    render() {


        return (
            <tr>
                <th scope="row">{ this.props.iteration }</th>
                <td>{ this.props.arg.firstName }</td>
                <td>{ this.props.arg.surname }</td>

                <CustomerListOptions>
                    N/A

                        <CustomerRemove  customerId={this.props.arg.id} removeCustomer={ this.props.removeCustomer } />
                        &nbsp;
                        <CustomerEdit  title='Aktualizace zákaznika' data={Example} />
                </CustomerListOptions>
            </tr>
        );
    }
}


