import * as React from "react";
import { Button, Input, Label, FormGroup, Form } from "reactstrap";
import { ProductInputType } from "../../../../typescript/enums/crud/products/forms/Product-Input-Type";

import ProductApi from "../../../../api/endpoints/ProductApi";
import CustomerApi from "../../../../api/endpoints/CustomerApi";
import OrderApi from "../../../../api/endpoints/OrderApi";

import { getUniqueId } from "../../../../helpers/components/rendererHelper";

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

    console.log(this.props.data);

    // Seed data to the form

    this.setState({
      choosenCustomerId: this.props.data.id
    });
  }

  createOrder = () => {
    const productArray = new Array<number>();

    this.state.selectedOptions.forEach((arg: any) => {
      productArray.push(arg.id);
    });

    this.props.createMethod({
      ProductArray: productArray,
      customerId: 6
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
            value={selectedOption}
            onChange={this.handleChange}
            options={products}
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
