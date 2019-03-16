//-----------------------------------------------------------------------
// <copyright file="Customers-Edit-Form.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Form that represents edit of choosen customer
//-----------------------------------------------------------------------

import * as React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class EditCustomerForm extends React.Component<any, any> {

  state = {
    firstname: this.props.arg.firstName,
    surname: this.props.arg.surname
  }

  componentDidMount() {
    console.log(this.props.arg);
  }

  updateCustomer = () => {

    // Object that will be sended with POST request to update customer
    const data = {
      id: this.props.arg.id,
      firstname: this.state.firstname,
      surname: this.state.surname
    }

    // Call method to update customer
    this.props.methods[0](data);
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

  render() {
    return (
      <Form method='POST'>
        <FormGroup>
          <Label for="firstnameLabel">Křestní jméno</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="firstemail" id="firstnameInputId" placeholder="" value={this.state.firstname} />
        </FormGroup>
        <FormGroup>
          <Label for="surnameLabel">Přijmení</Label>
          <Input onChange={this.fieldChangeHandler} type="text" name="surnameInput" id="surnameInputId" value={this.state.surname} />
        </FormGroup>

        <Button onClick={this.updateCustomer}>Aktualizovat</Button>
      </Form>
    );
  }
}