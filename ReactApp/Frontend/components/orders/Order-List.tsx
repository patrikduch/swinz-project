//---------------------------------------------------------------------------------------
// <copyright file="Order-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Order list which consists table with data manipulations (Redux connected component)
//----------------------------------------------------------------------------------------

// React dependency
import * as React from "react";
// Title of page (h2 heading)
import ListTitle from "../common/title/Page-Title";
import ListContainer from "../common/crud/read/List-Container";
import { ListItemType } from "../../typescript/enums/crud/List-Item-Type";
import { toCrudData } from "../../helpers/components/crudHelper";
import ListItemCreation from "../common/crud/create/List-Item-Creation";

interface IOrderListProps {
  actions: {
    getOrders: Function // fetching list of orders
    deleteOrder: Function // Deletion of specific order
    createOrder: Function // Creation of specific order
  },

  orders: any; // list of orders
}

export default class OrdertList extends React.Component<any, any> {
  componentWillMount() {
    this.props.actions.getOrders();
  }

  render() {
    return (
      <>
        <ListItemCreation
          type={ListItemType.Order}
          createMethod={this.props.actions.createOrder}
        />

        <ListTitle crud>Evidence objednávek</ListTitle>
        <ListContainer
          data={toCrudData(this.props.orders)}
          updateMethod={null}
          deleteMethod={this.props.actions.deleteOrder}
          columnNames={["#", "Datum objednávky", "Zákazník", "Výrobky"]}
          emptyError="Seznam objednávek je prázdný"
          type={ListItemType.Order}
          crud={true}
        />
      </>
    );
  }
}
