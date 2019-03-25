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

// Form validation
import CustomerRegexHelper from '../../../../../helpers/regex/Customer-Regex-Helper';

// Enum to determine type of filled input
import { CustomerInputType } from '../../../../../typescript/enums/customers/forms/Customer-InputType';

export default class NewCustomerForm extends React.Component<ICustomerAddFormProps, ICustomerAddFormState> {

  state = {
    firstname: {
      value: '',
    },
    lastname: '',
    password: '',
    username: {
      value: '',
    }
  }

  // Manipulation of web elements via state property
  fieldChangeHandler = (e: any) => {

    switch (e.target.id) {

      case 'firstnameInputId':

        this.setState({
          firstname: {
            value: e.target.value
          }

        });

        break;

      case 'surnameInputId':
        this.setState({
          lastname: e.target.value
        });
        break;

      case 'passwordInputId':
        this.setState({
          password: e.target.value
        });
        break;

      case 'usernameInputId':
        this.setState({
          username: {
            value: e.target.value
          }
        });
        break;
    }

  }

  // Validation method = if error occurs specific error message will be displayed
  validateInput = (input: string, type: string) => {

    if (input.length == 0) {
      return null;
    }

    switch (type) {

      case CustomerInputType.FirstName: // First name checker
        return CustomerRegexHelper.firstNameRegex(input);

      case CustomerInputType.LastName: // Lastname checker
        return CustomerRegexHelper.lastnameRegex(input);

      case CustomerInputType.Username: // Username checker

        break;
    }
  }


  registerUser = () => {

    // Empty fields cannot be used for new customer credentials
    if (this.state.firstname.value == '' || this.state.lastname == '') return;

    // Object that will be sended with POST request to create new customer
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password
    };

    // Call method for customer creation
    this.props.createCustomer(data);

    // Close form modal
    this.props.modalToggler();

  }

  render() {
    return (
      <Form method='POST'>
        <FormGroup>
          <Label for="usernameLabel">Uživatelské jméno</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="usernameInput" id="usernameInputId" value={this.state.username.value} />
        </FormGroup>
        <FormGroup>
          <Label for="passwordLabel">Heslo</Label>
          <Input onChange={this.fieldChangeHandler} type="password" name="passwordInput" id="passwordInputId" value={this.state.password} />
        </FormGroup>
        <FormGroup>
          <Label for="firstnameLabel">Křestní jméno</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="firstnameInput" id="firstnameInputId" value={this.state.firstname.value} />
          {
            this.validateInput(this.state.firstname.value, CustomerInputType.FirstName)
          }
        </FormGroup>
        <FormGroup>
          <Label for="surnameLabel">Přijmení</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="surnameInput" id="surnameInputId" value={this.state.lastname} />
          {
            this.validateInput(this.state.lastname, CustomerInputType.LastName)
          }

        </FormGroup>
        <Button onClick={this.registerUser}>Vytvořit</Button>
      </Form>
    );
  }
}