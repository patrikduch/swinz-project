import * as React from "react";
import { Button, Form } from "reactstrap";

import ProductApi from "../../../../api/endpoints/ProductApi";
import CustomerApi from "../../../../api/endpoints/CustomerApi";

import Select from "react-select";

export default class OrderCreationForm extends React.Component<any, any> {
  state = {
    products: [],
    customers: [],
    value: [""],
    customerSelectBox: {} as any, 
    selectedOptions: []
  };

  // Event handler for changing customer in selectbox
  onCustomerChange = (e: any) => {
    this.setState({
      customerSelectBox: e
    });
  }

  onTestChange(e: any) {
    this.setState({
      value: e.target.value
    });
  }

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
  }

  // Creation of new order
  createOrder = () => {
    const productArray = new Array<number>();

    this.state.selectedOptions.forEach((arg: any) => {
      productArray.push(arg.id);
    });

    this.props.createMethod({
      ProductArray: productArray,
      customerId: this.state.customerSelectBox.id
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

    return (
      <>
        <Form>
          <p>Zákazník</p>

          <div>
            <Select
              onChange={this.onCustomerChange}
              options={customers}
              placeholder='Výběr zákazníka...'
            />
          </div>

          <br />

          <p>Výrobky</p>
          <Select
            isMulti
            value={selectedOption}
            onChange={this.handleChange}
            options={products}
            placeholder='Zvolte výrobky...'
          />

          <br />
          <br />
          <br />

          <div>
            <Button onClick={this.createOrder}>Vytvořit objednávku</Button>
          </div>
        </Form>
      </>
    );
  }
}
