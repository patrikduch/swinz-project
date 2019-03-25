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
    firstname: {
      value: '',
    },
    surname: '',
    password: '',
    username: {
      value: '',
    }
  }

  componentDidMount() {
    console.log(this.state.firstname.value.length)
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
          surname: e.target.value
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

  validateInput = (input: string) => {
    if (input.length == 0) {
      return null;
    } else if (input.length >=1 && input.length < 20) {
      return <p>Zadejte delší křestní jméno</p>;
    }
  }


  registerUser = () => {

    // Empty fields cannot be used for new customer credentials
    if (this.state.firstname.value == '' || this.state.surname == '') return;

    // Object that will be sended with POST request to create new customer
    const data = {
      firstname: this.state.firstname,
      surname: this.state.surname,
      username: this.state.username,
      password: this.state.password
    };

    // Call method for customer creation
    this.props.createCustomer(data);

    // Close form modal
    this.props.modalToggler();

  }

  render() {

    console.log(this.state.firstname)

    return (
      <Form method='POST'>
        <FormGroup>
          <Label for="usernameLabel">Uživatelské jméno</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="usernameInput" id="usernameInputId" value={this.state.username.value}  />
        </FormGroup>
        <FormGroup>
          <Label for="passwordLabel">Heslo</Label>
          <Input onChange={this.fieldChangeHandler} type="password" name="passwordInput" id="passwordInputId" value={this.state.password}  />
        </FormGroup>
        <FormGroup>
          <Label for="firstnameLabel">Křestní jméno</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="firstnameInput" id="firstnameInputId" value={this.state.firstname.value} />
          {
            this.validateInput(this.state.firstname.value)
          }
        </FormGroup>
        <FormGroup>
          <Label for="surnameLabel">Přijmení</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="surnameInput" id="surnameInputId" value={this.state.surname} />
        </FormGroup>
        <Button onClick={this.registerUser}>Vytvořit</Button>
      </Form>
    );
  }
}