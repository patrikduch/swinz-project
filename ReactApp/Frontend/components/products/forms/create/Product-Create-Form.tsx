import * as React from "react";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import Button from "reactstrap/lib/Button";


export default class NewProductForm extends React.Component<any, any> {

  componentDidMount() {

  }

  state = {
    productName: '',
    productCost: '',
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
          lastname: e.target.value
        });
        break;

      case 'passwordInputId':
        this.setState({
          password: e.target.value
        });
        break;

      case 'usernameInputId':
        this.setState({
          username: e.target.value
        });
        break;
    }

  }

  render() {

    return (
      <>
        <Form>
          <FormGroup>
            <Label for="productNameId">Název produktu</Label>
            <Input type="text" name="productNameInput" id="productNameId" />
          </FormGroup>
          <FormGroup>
            <Label for="productCostId">Cena produktu</Label>
            <Input
              type="text"
              name="producCostInput"
              id="productCostId"
            />
          </FormGroup>
  
          <Button>Vytvořit výrobek</Button>
        </Form>
      </>
    );

  }

  
};
