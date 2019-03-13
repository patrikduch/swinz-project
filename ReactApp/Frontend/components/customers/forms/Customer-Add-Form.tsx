import * as React from 'react';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

import { Redirect } from 'react-router-dom';

export default class NewCustomerForm extends React.Component<any,any> {

    data = {
      firstname: "hello",
      surname: "Worldik"
    }

    testik = false;

    test = () => {

      this.props.test({
        isOpen: false
      })

      this.testik = true;

      

      this.props.methods[0](this.data).then(() => {

          
      })

      //this.props.methods[0](this.data)
    }

    render() {

      
      return (

      
        <Form>
          <FormGroup>
            <Label for="firstnameLabel">Křestní jméno</Label>
            <Input type="text" name="firstnameInput" id="firstnameInputId" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="surnameLabel">Přijmení</Label>
            <Input type="text" name="surnameInput" id="surnameInputId" placeholder="" />
          </FormGroup>
          
          <Button onClick={() => this.test() }>Zaregistrovat</Button>
        </Form>
      );
    }
  }