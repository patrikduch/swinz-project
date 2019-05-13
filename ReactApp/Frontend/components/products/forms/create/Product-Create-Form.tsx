import * as React from 'react';
import { Button, Input, Label, FormGroup, Form,} from 'reactstrap';
import { ProductInputType } from '../../../../typescript/enums/crud/products/forms/Product-Input-Type';

export default class ProductCreationForm extends React.Component<any, any> {
  state = {
    productName: '',
    productPrice: ''
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

  createProduct = () => {
    // Object that will be sended with POST request to create new customer
    const data = {
      name: this.state.productName,
      price: this.state.productPrice
    };

    console.log(data);

    // Call method for customer creation
    this.props.createMethod(data);

    // Close form modal
    this.props.modalToggler();
  };

  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Label for={ProductInputType.name}>Název produktu</Label>
            <Input
              type='text'
              name='productNameInput'
              id={ProductInputType.name}
              onChange={this.fieldChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for={ProductInputType.price}>Cena produktu</Label>
            <Input
              type='text'
              name='producCostInput'
              id={ProductInputType.price}
              onChange={this.fieldChangeHandler}
            />
          </FormGroup>

          <Button onClick={this.createProduct}>Vytvořit výrobek</Button>
        </Form>
      </>
    );
  }
}