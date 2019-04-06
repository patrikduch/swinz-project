//-----------------------------------------------------------------------
// <copyright file="Product-Update-Form.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Form that represents updating specific product
//-----------------------------------------------------------------------

import * as React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ProductInputType } from "../../../../typescript/enums/crud/products/forms/Product-Input-Type";

// Props interface
import IProductUpdateFormProps from '../../../../typescript/interfaces/components/products/crud/update/IProduct-Update-Form-Props';

// State interface

export default class CustomerUpdateForm extends React.Component<IProductUpdateFormProps, any> {

  state = {
      productName: this.props.data.getName,
      productPrice: this.props.data.getPrice
  };

  // Manipulation of web elements via state property
  fieldChangeHandler = (e: any) => {
    switch (e.target.id) {
      case ProductInputType.name:
        this.setState({
          productName: e.target.value
        });
        break;

      case ProductInputType.price:
        this.setState({
          productPrice: e.target.value
        });
        break;
    }
  };


  updateProduct = () => {
    // Object that will be sended with POST request to create new customer
    const data = {
      id: this.props.data.getId,
      name: this.state.productName,
      price: this.state.productPrice
    };

    console.log(data);

    // Call method for customer creation
    this.props.updateMethod(data);

    // Close form modal
    this.props.modalToggler();
  };

  render() {
    return (
      <Form method="POST">
        <FormGroup>
          <Label for="productNameInputId">Název výrobku</Label>
          <Input 
                type="text"
                name="productNameInput"
                id="productNameInputId"
                value={this.state.productName}
                onChange={this.fieldChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="productPriceInputId">Cena výrobku</Label>
          <Input
            type="text"
            name="productPriceInput"
            id="productPriceInputId"
            value={this.state.productPrice}
            onChange={this.fieldChangeHandler}
          />
        </FormGroup>

        <Button onClick={this.updateProduct}>Uložit změny</Button>
      </Form>
    );
  }
}
