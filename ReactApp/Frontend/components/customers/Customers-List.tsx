//---------------------------------------------------------------------------------------
// <copyright file="Customer-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer list which consists table with data manipulations (redux connected component)
//----------------------------------------------------------------------------------------

// React dependency
import * as React from 'react';

// Title of CRUD manipulator
import ListTitle from '../common/Page-Title';

// List content
import ListContainer from '../common/crud/read/List-Container';

// Create operation
import ListItemCreation from '../common/crud/create/List-Item-Creation';

// Entity objects
import CustomerObject from '../../view-models/Customer';
import ListItemObject from '../../helpers/types/List-Item-Object';
import { ListItemType } from '../../typescript/enums/crud/List-Item-Type';


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
            <>
                <ListTitle crud>Evidence zákazniků</ListTitle>
                <ListItemCreation createMethod={this.props.actions.createCustomer} type={ListItemType.Customer} />
                <ListContainer 
                    data={ this.transformData() } 
                    type={ListItemType.Customer}
                    updateMethod={this.props.actions.updateCustomer}
                    deleteMethod={this.props.actions.deleteCustomer}
                    columnNames = {['#','Křestní jméno','Přijmení', 'Nárok na slevu']}
                    emptyError = 'Seznam zákazníků je prázdný'

                />
            </>
        );
    }
}

