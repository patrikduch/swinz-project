//-------------------------------------------------------------------------
// <copyright file="Order-Update-Form.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Form for updating orders
//-------------------------------------------------------------------------
import * as React from "react";
import { Button, Form } from "reactstrap";
import ProductApi from "../../../../api/endpoints/ProductApi";
import CustomerApi from "../../../../api/endpoints/CustomerApi";
import Select from "react-select";

export default class OrderUpdateForm extends React.Component<any, any> {
  state = {
    products: [],
    customers: [],
    value: [""],
    customerSelectBox: "",
    selectedOptions: [],

    choosenCustomerId: null
  };

  onChange(e: any) {
    this.setState({
      customerSelectBox: e.target.value
    });
  }

  onTestChange(e: any) {
    this.setState({
      value: e.target.value
    });
  }

  // Handler for changing products selectbox
  handleChange = (selectedOptions: any) => {
    this.setState({ selectedOptions });
  };

  componentDidMount() {
    ProductApi.getProducts().then((res: any) => {
      this.setState({
        products: res.data
      });
    });

    CustomerApi.getCustomers().then((res: any) => {
      this.setState({
        customers: res.data
      });
    });

    // Seed data to the form

    this.setState({
      choosenCustomerId: this.props.data.id
    });

    const selectedProducts = new Array<object>();

    // Get products for choosen customer

    this.props.data.products.forEach((element: any) => {
      selectedProducts.push({
        id: element.id,
        value: element.name,
        label: element.name
      });
    });

    this.setState({
      selectedOptions: selectedProducts
    });
  }

  UpdateOrder = () => {
    // Get products identifiers
    const productsIds = this.state.selectedOptions.map((arg: any) => {
      return arg.id;
    });

    // Call update method via REST interface
    this.props.updateMethod({
      orderId: this.props.data.id,
      ProductIds: productsIds
    });

    this.props.modalToggler();
  };

  render() {
    console.log(this.state.selectedOptions);

    const { selectedOption }: any = this.state;

    const selectedProducts = new Array<object>();
    const optionProducts = new Array<object>();

    this.state.products.forEach((element: any) => {
      optionProducts.push({
        id: element.id,
        value: element.name,
        label: element.name
      });
    });

    const customers = new Array<object>();

    this.state.customers.forEach((element: any) => {
      customers.push({
        id: element.id,
        value: element.firstName + " " + element.lastName,
        label: element.firstName + " " + element.lastName
      });
    });

    // Get products for choosen customer

    this.props.data.products.forEach((element: any) => {
      selectedProducts.push({
        id: element.id,
        value: element.name,
        label: element.name
      });
    });

    return (
      <>
        <Form>
          <p>Zákazník</p>
          <Select
            value={
              customers.find((op: any) => {
                return op.id === this.props.data.customerId;
              }) as any
            }
            onChange={this.handleChange}
            options={customers}
          />

          <div />

          <br />

          <p>Výrobky</p>
          <Select
            isMulti
            value={this.state.selectedOptions}
            onChange={this.handleChange}
            options={optionProducts}
            placeholder="Zvolte výrobky..."
          />

          <br />
          <br />
          <br />

          <div>
            <Button onClick={this.UpdateOrder}>Aktualizovat objednávku</Button>
          </div>
        </Form>
      </>
    );
  }
}
