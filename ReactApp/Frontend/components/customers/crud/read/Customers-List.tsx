//---------------------------------------------------------------------------------------
// <copyright file="Customer-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer list which consists table with data manipulations (redux connected component)
//----------------------------------------------------------------------------------------

import * as React from 'react';

// Styled helper
import styled from 'styled-components';

import { Table } from 'reactstrap';

import ListHeadings from '../../../common/crud/read/List-Headings';


import CustomersListBody from './Customers-List-Body';
import CustomerListPaging from './Customers-List-Paging';

// Modals
import AddCustomerModal from '../../../customers/crud/add/modals/Customer-Creation-Modal';


// Container that wrappps list of customers
const Container = styled.div`
  //  margin-top: 1.0vh;
`;

// Title of customer page
const CustomersTitle = styled.h2`
    margin-top: 5.0vh;
    text-align: center;
`;


var uniqid = require('uniqid');


export default class CustomersList extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.getCustomers();
    }

    getCustomers = () => {
        if (this.props.customers != undefined) {
            return (
                <Container>
                    <Table>
                        <ListHeadings columns={['#','Křestní jméno','Přijmení', 'Nárok na slevu']} />
                        <CustomersListBody data={ this.props.customers } updateCustomer={this.props.actions.updateCustomer} deleteCustomer={this.props.actions.deleteCustomer} />
                    </Table>
                </Container>
            );
        }
        return null
    }

    render() {
        return (
            <div>
                <CustomersTitle>Evidence zákazniků</CustomersTitle>
                <AddCustomerModal createCustomer={this.props.actions.createCustomer} />
                { this.getCustomers() }
            </div>
        );
    }
}

