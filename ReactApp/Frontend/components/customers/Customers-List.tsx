//-----------------------------------------------------------------------
// <copyright file="Customer-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer list which consists table with data manipulations
//-----------------------------------------------------------------------

import * as React from 'react';

import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

import CustomersListHeadings from './Customers-List-Headings';
import CustomersListBody from './Customers-List-Body';
import CustomerListPaging from './Customers-List-Paging';


export default class CustomersList extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.getCustomers();
    }

    getCustomers = () => {

        if (this.props.customers != undefined) {

            return (
                <div>
                    <Table>
                        <CustomersListHeadings />
                        <CustomersListBody data={this.props.customers} />
                    </Table>

                    <CustomerListPaging />
                </div>

            );
        }

        return null;

    }

    render() {
        return (
            <div>
                <p className='customers-title'>Evidence zákazníků</p>
                <Button outline color="primary">Nový zákazník</Button>
                {this.getCustomers()}
            </div>
        )
    }
}

