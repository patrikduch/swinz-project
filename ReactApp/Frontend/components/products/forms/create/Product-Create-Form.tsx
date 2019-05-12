import * as React from "react";
import { Button, Input, Label, FormGroup, Form } from "reactstrap";
import { ProductInputType } from "../../../../typescript/enums/crud/products/forms/Product-Input-Type";

import ProductApi from "../../../../api/endpoints/ProductApi";
import CustomerApi from "../../../../api/endpoints/CustomerApi";
import OrderApi from "../../../../api/endpoints/OrderApi";

import { getUniqueId } from "../../../../helpers/components/rendererHelper";

import Select from "react-select";

export default class ProductCreationForm extends React.Component<any, any> {
  state = {
    products: [],
    customers: [],
    value: [""],
    customerSelectBox: "",
    selectedOptions: []
  };

  test = {} as any;

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

    const products = this.state.products.map((arg: any) => {
      return arg.name;
    });

    const customers = this.state.customers.map((arg: any) => {
      return arg.firstName + " " + arg.lastName;
    });

    const test = new Array<object>();

    this.state.products.forEach((element: any) => {  
      test.push({

        id: element.id,
        value: element.name,
        label: element.name
      });
    });


    return (
      <>
        <Form>
          <p>Zákazník</p>

          <div>
            <select
              value={this.state.customerSelectBox}
              onChange={this.onChange.bind(this)}
              className="form-control"
            >
              <option value="select">Výběr zákazníka</option>
              {customers.map(arg => {
                return (
                  <option key={getUniqueId()} value={arg}>
                    {arg}
                  </option>
                );
              })}
            </select>
          </div>

          <div />

          <br />

          <p>Výrobky</p>
          <Select
            isMulti
            value={selectedOption}
            onChange={this.handleChange}
            options={test}
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
