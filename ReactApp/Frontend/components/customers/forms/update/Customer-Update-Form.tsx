//-----------------------------------------------------------------------
// <copyright file="Customer-Update-Form.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Form that represents updating specific customer
//-----------------------------------------------------------------------

import * as React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { CustomerInputType } from '../../../../typescript/enums/customers/forms/Customer-Input-Type';

// Props interface
import ICustomerUpdateFormProps from '../../../../typescript/interfaces/components/customers/crud/update/ICustomer-Update-Form-Props';

// State interface
import ICustomerUpdateFormState from '../../../../typescript/interfaces/components/customers/crud/update/ICustomer-Update-Form-State';

export default class CustomerUpdateForm extends React.Component<
  ICustomerUpdateFormProps,
  ICustomerUpdateFormState
> {
  state = {
    firstname: this.props.data.getFirstname,
    lastname: this.props.data.getLastname,
    password: "",
    username: ""
  };

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
  };

  customerUpdate = () => {
    console.log(this.props.data.getId);

    // Object that will be sended with POST request to create new customer
    const data = {
      id: this.props.data.getId,
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      username: this.state.username,
      password: this.state.password
    };

    // Call method for customer creation
    this.props.updateMethod(data);

    // Close form modal
    this.props.modalToggler();
  };
  render() {
    return (
      <Form method="POST">
        <FormGroup>
          <Label for="firstnameInputId">Křestní jméno</Label>
          <Input
            type="text"
            name="firstnameInput"
            id="firstnameInputId"
            value={this.state.firstname}
            onChange={this.fieldChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastnameInputId">Přijmení</Label>
          <Input
            type="text"
            name="lastnameInput"
            id="lastnameInputId"
            value={this.state.lastname}
            onChange={this.fieldChangeHandler}
          />
        </FormGroup>
        <Button onClick={this.customerUpdate}>Uložit změny</Button>
      </Form>
    );
  }
}
