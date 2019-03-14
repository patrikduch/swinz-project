//-----------------------------------------------------------------------
// <copyright file="Customer-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer list which consists table with data manipulations
//-----------------------------------------------------------------------

import * as React from 'react';

import { Table } from 'reactstrap';
import CustomersListHeadings from './Customers-List-Headings';
import CustomersListBody from './Customers-List-Body';
import CustomerListPaging from './Customers-List-Paging';
import AddCustomer from '../add/Customers-Add';

// Styled helper
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 2.0vh;
`;

// Title of customer page
const Title = styled.h2`

    margin-top: 6.0vh;
    text-align: center;
`;

export default class CustomersList extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.getCustomers();
    }

    getCustomers = () => {
        if (this.props.customers != undefined) {
            return (
                <Container>
                    <Table>
                        <CustomersListHeadings />
                        <CustomersListBody removeCustomer={ this.props.actions.deleteCustomer } data={ this.props.customers } />
                    </Table>
                    <CustomerListPaging />
                </Container>
            );
        }
        return null;
    }

    render() {
        return (
            <div>
                <Title>Evidence zákazniků</Title>
                <AddCustomer addCustomer={this.props.actions.createCustomer} title='Přidání nového zákazníka' btnIcon='plus' />
                { this.getCustomers() }
            </div>
        );
    }
}

