import * as React from 'react';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

import { Redirect } from 'react-router-dom';

export default class NewCustomerForm extends React.Component<any,any> {

    data = {
      firstname: "hello",
      surname: "Worldik"
    }


    test = () => {

 
      

      this.props.methods[0](this.data).then(() => {

          
      })

      //this.props.methods[0](this.data)
    }

    render() {

      
      return (

      
        <Form method='POST'>
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