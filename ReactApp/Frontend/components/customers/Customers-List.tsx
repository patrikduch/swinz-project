//---------------------------------------------------------------------------------------
// <copyright file="Customer-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer list which consists table with data manipulations (redux connected component)
//----------------------------------------------------------------------------------------

// React dependency
import * as React from "react";

// List content
import ListContainer from "../common/crud/read/List-Container";

// Entity objects
import CustomerObject from "../../view-models/Customer";
import ListItemObject from "../../helpers/types/List-Item-Object";
import { ListItemType } from "../../typescript/enums/crud/List-Item-Type";

// Create operation
import ListItemCreation from "../common/crud/create/List-Item-Creation";

export default class CustomersList extends React.Component<any, any> {
  columnNames = ["#", "Křestní jméno", "Přijmení", "Nárok na slevu", "   "];

  componentWillMount() {
    this.props.actions.getCustomers();
  }

  componentDidMount() {
    if (this.props.stats) {
      this.columnNames = ["#", "Křestní jméno", "Přijmení", "    "];
    }
  }

  transformData = () => {
    const list = new ListItemObject<CustomerObject>();

    if (this.props.customers != undefined) {
      this.props.customers.forEach((arg: any) => {
        const newObj = new CustomerObject(arg.id, arg.firstName, arg.lastName);
        list.objects.push(newObj);
      });

      return list;
    }
  };

  render() {
    return (
      <>
        {this.props.crud && (
          <ListItemCreation
            type={ListItemType.Customer}
            createMethod={this.props.actions.createCustomer}
          />
        )}

        <ListContainer
          data={this.transformData()}
          deleteMethod={this.props.actions.deleteCustomer}
          updateMethod={this.props.actions.updateCustomer}
          stats={this.props.stats}
          crud={this.props.crud}
          type={ListItemType.Customer}
          columnNames={this.columnNames}
          emptyError="Seznam zákazníků je prázdný"
        />
      </>
    );
  }
}
