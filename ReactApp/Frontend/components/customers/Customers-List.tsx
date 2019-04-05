//---------------------------------------------------------------------------------------
// <copyright file="Customer-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer list which consists table with data manipulations (redux connected component)
//----------------------------------------------------------------------------------------

import * as React from 'react';

import ListTitle from '../common/crud/read/List-Title';
import CustomerListContainer from '../common/crud/read/List-Container';

// Create operation
import CustomerCreation from '../common/crud/create/List-Item-Creation';

// Entity objects
import CustomerObject from '../../helpers/types/Customer-Object';
import ListItemObject from '../../helpers/types/List-Item-Object';


export default class CustomersList extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.getCustomers();
    }

    transformData = () => {

        const list = new ListItemObject<CustomerObject>();
                
        if(this.props.customers != undefined) {

            this.props.customers.forEach((arg: any) => {
                const newObj = new CustomerObject(arg.id, arg.firstName, arg.lastName);
                list.objects.push(newObj);
            })

            return list;
        }
    }

    render() {
        return (
            <div>
                <ListTitle>Evidence zákazniků</ListTitle>
                <CustomerCreation modalTitle='Vytvoření nového zákazníka' />

                <CustomerListContainer 
                    data={ this.transformData() } 
                    updateMethod={this.props.actions.updateCustomer}
                    deleteMethod={this.props.actions.deleteCustomer}
                    columnNames = {['#','Křestní jméno','Přijmení', 'Nárok na slevu']}
                    emptyError = 'Seznam zákazníků je prázdný'

                />
            </div>
        );
    }
}

