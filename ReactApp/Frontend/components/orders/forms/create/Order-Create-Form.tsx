//-------------------------------------------------------------------------
// <copyright file="Order-Create-Form.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Form for creating orders
//-------------------------------------------------------------------------

import * as React from "react";
import { Button, Form } from "reactstrap";
import ProductApi from "../../../../api/endpoints/ProductApi";
import CustomerApi from "../../../../api/endpoints/CustomerApi";
import Select from "react-select";

export default class OrderCreationForm extends React.Component<any, any> {

  state = {
    products: [],
    customers: [],
    customerSelectBox: {} as any, 
    feeSelectBox : {} as any,
    selectedOptions: [],
    feeOptions : [0,5,10,15,25],
  };

  // Event handler for changing customer from selectbox
  onCustomerChange = (e: any) => {
    this.setState({
      customerSelectBox: e
    });
  }

  onFeeChange = (e: any) => {
    this.setState({
      feeSelectBox: e
    });
  }

  // Event handler for changing products from selectbox
  onProductChange = (selectedOptions: any) => {
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
  }

  // Creation of new order
  createOrder = () => {
    const productArray = new Array<number>();

    this.state.selectedOptions.forEach((arg: any) => {
      productArray.push(arg.id);
    });

    console.log(this.state.feeSelectBox)

    this.props.createMethod({
      ProductArray: productArray,
      customerId: this.state.customerSelectBox.id,
      feeId: this.state.feeSelectBox.id

    });

    this.props.modalToggler();
  };

  render() {
    const { selectedOption }: any = this.state;

    const products = new Array<object>();

    this.state.products.forEach((element: any) => {
      products.push({
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

    // Transform to the valid  fee options

    const feeOptions = new Array<object>();

    this.state.feeOptions.forEach((element: any) => {
      feeOptions.push({
        id: element,
        value: element,
        label: element
      });
    });

    return (
      <>
        <Form>
          <p>Zákazník</p>
            <Select
              onChange={this.onCustomerChange}
              options={customers}
              placeholder='Výběr zákazníka...'
            />
          <br />

          <p>Výrobky</p>
          <Select
            isMulti
            value={selectedOption}
            onChange={this.onProductChange}
            options={products}
            placeholder='Zvolte výrobky...'
          />

          <br/>

          <p>Nastavení slevy (%)</p>

          <Select
            value={selectedOption}
            onChange={this.onFeeChange}
            options={feeOptions}
            placeholder='Vyberte slevu...'
          />

          <br/>
          

          <div>
            <Button onClick={this.createOrder}>Vytvořit objednávku</Button>
          </div>
        </Form>
      </>
    );
  }
}
