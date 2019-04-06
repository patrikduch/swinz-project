import * as React from "react";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import Button from "reactstrap/lib/Button";
import { ProductInputType } from "../../../../typescript/enums/crud/products/forms/Product-Input-Type";

export default class ProductCreationForm extends React.Component<any, any> {
  state = {
    productName: "",
    productCost: ""
  };

  // Manipulation of web elements via state property
  fieldChangeHandler = (e: any) => {
    switch (e.target.id) {
      case ProductInputType.name:
        this.setState({
          productName: e.target.value
        });
        break;

      case "surnameInputId":
        this.setState({
          lastname: e.target.value
        });
        break;
    }
  };

  createProduct = () => {
    // Object that will be sended with POST request to create new customer
    const data = {
      name: this.state.productName,
      cost: this.state.productCost
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
              type="text"
              name="productNameInput"
              id={ProductInputType.name}
              onChange={this.fieldChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for={ProductInputType.cost}>Cena produktu</Label>
            <Input
              type="text"
              name="producCostInput"
              id={ProductInputType.cost}
              onChange={this.fieldChangeHandler}
            />
          </FormGroup>

          <Button onClick={this.createProduct}>Vytvořit výrobek</Button>
        </Form>
      </>
    );
  }
}
