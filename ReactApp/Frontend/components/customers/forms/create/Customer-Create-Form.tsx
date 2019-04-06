//-----------------------------------------------------------------------
// <copyright file="Customers-Create-Form.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Form that represents creation of new customer
//-----------------------------------------------------------------------

import * as React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Props interface
import ICustomerAddFormProps from '../../../../typescript/interfaces/components/customers/ICustomer-Add-Form-Props';
// State interface
import ICustomerAddFormState from '../../../../typescript/interfaces/components/customers/ICustomer-Add-Form-State';

// Form validation
import CustomerRegexHelper from '../../../../helpers/regex/Customer-Regex-Helper';

// Enum to determine type of filled input
import { CustomerInputType } from '../../../../typescript/enums/customers/forms/Customer-Input-Type';

export default class NewCustomerForm extends React.Component<ICustomerAddFormProps, ICustomerAddFormState> {

  state = {
    firstname:'',
    lastname: '',
    password: '',
    username: ''
  }

  // Manipulation of web elements via state property
  fieldChangeHandler = (e: any) => {

    switch (e.target.id) {

      case CustomerInputType.FirstName:
        this.setState({
          firstname: e.target.value
        });
        break;

      case CustomerInputType.LastName:
        this.setState({
          lastname: e.target.value
        });
        break;

      case CustomerInputType.Password:
        this.setState({
          password: e.target.value
        });
        break;

      case CustomerInputType.Username:
        this.setState({
          username: e.target.value
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
    if (this.state.firstname == '' || this.state.lastname == '') return;

    // Object that will be sended with POST request to create new customer
    const data = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      username: this.state.username,
      password: this.state.password
    };

    // Call method for customer creation
    this.props.createMethod(data);

    // Close form modal
    this.props.modalToggler();

  }

  render() {
    return (
      <Form method='POST'>
        <FormGroup>
          <Label for="usernameLabel">Uživatelské jméno</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="usernameInput" id="usernameInputId" value={this.state.username} />
        </FormGroup>
        <FormGroup>
          <Label for="passwordLabel">Heslo</Label>
          <Input onChange={this.fieldChangeHandler} type="password" name="passwordInput" id="passwordInputId" value={this.state.password} />
        </FormGroup>
        <FormGroup>
          <Label for="firstnameLabel">Křestní jméno</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="firstnameInput" id="firstnameInputId" value={this.state.firstname} />
          {
            this.validateInput(this.state.firstname, CustomerInputType.FirstName)
          }
        </FormGroup>
        <FormGroup>
          <Label for="lastnameLabel">Přijmení</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="lastnameInput" id="lastnameInputId" value={this.state.lastname} />
          {
            this.validateInput(this.state.lastname, CustomerInputType.LastName)
          }

        </FormGroup>
        <Button onClick={this.registerUser}>Vytvořit</Button>
      </Form>
    );
  }
}