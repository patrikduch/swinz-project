//-----------------------------------------------------------------------
// <copyright file="Customer-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer list which consists table with data manipulations
//-----------------------------------------------------------------------

import * as React from 'react';

import { Table } from 'reactstrap';
import CustomersListHeadings from './Customers-List-Headings';
import CustomersListBody from './Customers-List-Body';
import CustomerListPaging from './Customers-List-Paging';
import AddCustomer from './Customers-Add';


import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class NewCustomerForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="firstnameLabel">Křestní jméno</Label>
          <Input type="text" name="firstnameInput" id="firstnameInputId" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="surnameLabel">Přijmení</Label>
          <Input type="text" name="surnameInput" id="surnameInputId" placeholder="" />
        </FormGroup>
        
        <Button>Zaregistrovat</Button>
      </Form>
    );
  }
}

export default class CustomersList extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.getCustomers();
    }

    getCustomers = () => {

        if (this.props.customers != undefined) {

            return (
                <div>
                    <Table>
                        <CustomersListHeadings />
                        <CustomersListBody removeCustomer={ this.props.actions.deleteCustomer } data={ this.props.customers } />
                    </Table>
                    <CustomerListPaging />
                </div>
            );
        }

        return null;

    }

    render() {
        return (
            <div>
                <p className='customers-title'>Evidence zákazníků</p>
                <AddCustomer data={ NewCustomerForm } title='Přidání nového zákazníka' btnIcon='plus' />
                { this.getCustomers() }
            </div>
        );
    }
}

