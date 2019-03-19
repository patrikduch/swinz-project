//-----------------------------------------------------------------------
// <copyright file="Login-Form.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Login page
//-----------------------------------------------------------------------

import * as React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

export default class LoginPage extends React.Component<any, any> {

    state = {
        loginSuccess: false,
        username: '',
        password: ''
    }

    isFormValid = (data: any) => {

        if(data.Username == '' || data.Password == '') {

            return false;
        }

        return true;
    }

     
    loginUser = () => {
        
        const data = {
            Username: this.state.username,
            Password: this.state.password
        };

        const valid = this.isFormValid(data);

        if(valid) {
        
            this.props.actions.loginProcess(data);

            this.setState(() => ({
                loginSuccess: true,          
            }));
        }
    }

    onFieldChange = (event:any) => {

        switch(event.target.id) {

            case 'usernameField':
                this.setState({
                    username: event.target.value
                });

                break;

            case 'passwordField':
                this.setState({
                password: event.target.value
                });
        
            break;
        }
    }

    render() {

        if (this.props.auth.isAuthenticated === true) {
            return <Redirect to='/' />
        }

        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="usernameField">Uživatelske jmeno</Label>
                        <Input onChange={ this.onFieldChange } type="text" name="email" id="usernameField" value={ this.state.username } />
                    </FormGroup>
                    <FormGroup>
                        <Label for="passwordField">Heslo</Label>
                        <Input onChange={ this.onFieldChange } type="password" name="password" id="passwordField" />
                    </FormGroup>
    
                    <Button onClick={ this.loginUser }>Přihlásit se</Button>
                </Form>
            </Container>
    
        );

    }

    
}