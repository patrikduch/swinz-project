//-----------------------------------------------------------------------
// <copyright file="Customer-Create-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer create page
//-----------------------------------------------------------------------

import * as React from 'react';
import Button from 'reactstrap/lib/Button';

import { Redirect } from 'react-router-dom';

export default class CustomerCreatePage extends React.Component {

    state = {
        test: false
    }

    testik = () => {

        this.setState({
            test: true
        });
    }

    render() {

        return (
            <div>
                <Button onClick={() => this.testik() }>aaa</Button>

                {
                    this.state.test== true && <Redirect to ="/customers"></Redirect>
                }

            </div>
        )
    }
}

