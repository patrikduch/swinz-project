import * as React from "react";
import { Button, Input, Label, FormGroup, Form } from "reactstrap";
import { ProductInputType } from "../../../../typescript/enums/crud/products/forms/Product-Input-Type";

import ProductApi from "../../../../api/endpoints/ProductApi";
import CustomerApi from "../../../../api/endpoints/CustomerApi";
import OrderApi from "../../../../api/endpoints/OrderApi";

import { getUniqueId } from "../../../../helpers/components/rendererHelper";

import Select from "react-select";

const options = [
  { value: 'a', label: 'a' },
  { value: 'b', label: 'b' },
];

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
    ProductApi.getProducts().then(res => {
      this.setState({
        products: res.data
      });
    });

    CustomerApi.getCustomers().then(res => {
      this.setState({
        customers: res.data
      });
    });

    console.log(this.test);
  }

  createOrder = () => {
    //OrderApi.createOrder({
    //ProductArray: [1, 2],
    //CustomerId: 1
    //}).then(res => {
    //console.log(res);
    //});

    console.log(this.test);
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

        id: element.id
      });
      
    });

    console.log(this.state.selectedOptions);

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
            options={options}
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
