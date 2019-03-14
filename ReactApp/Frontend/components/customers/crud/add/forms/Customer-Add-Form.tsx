//-----------------------------------------------------------------------
// <copyright file="Customers-Add-Form.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Form that represents creation of new customer
//-----------------------------------------------------------------------

import * as React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Props interface
import ICustomerAddFormProps from '../../../../../typescript/interfaces/components/customers/ICustomer-Add-Form-Props';

// State interface
import ICustomerAddFormState from '../../../../../typescript/interfaces/components/customers/ICustomer-Add-Form-State';

export default class NewCustomerForm extends React.Component<ICustomerAddFormProps, ICustomerAddFormState> {

  state = {
    firstname: '',
    surname: ''
  }

  // Manipulation of web elements via state property
  fieldChangeHandler = (e: any) => {

    switch (e.target.id) {

      case 'firstnameInputId':
        this.setState({
          firstname: e.target.value
        });
        break;

      case 'surnameInputId':
        this.setState({
          surname: e.target.value
        });
        break;
    }
  }


  registerUser = () => {

    // Empty fields cannot be used for new customer credentials
    if(this.state.firstname == '' || this.state.surname == '')  return;

    // Object that will be sended with POST request to create new customer
    const data = {
      firstname: this.state.firstname,
      surname: this.state.surname
    }

    // Call method for customer creation
    this.props.methods[0](data)

    // Close form window
    this.props.toggler();

  }

  render() {
    return (
      <Form method='POST'>
        <FormGroup>
          <Label for="firstnameLabel">Křestní jméno</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="firstnameInput" id="firstnameInputId" value={this.state.firstname} />
        </FormGroup>
        <FormGroup>
          <Label for="surnameLabel">Přijmení</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="surnameInput" id="surnameInputId" value={this.state.surname} placeholder="" />
        </FormGroup>

        <Button onClick={this.registerUser}>Zaregistrovat</Button>
      </Form>
    );
  }
}