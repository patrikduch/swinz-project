//---------------------------------------------------------------------------------------
// <copyright file="Product-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Product list which consists table with data manipulations (Redux connected component)
//----------------------------------------------------------------------------------------

// React dependency
import * as React from "react";

import ListTitle from "../common/title/Page-Title";
import ListContainer from "../common/crud/read/List-Container";
import ListItemObject from "../../helpers/types/List-Item-Object";

// Create operation
import ListItemCreation from "../common/crud/create/List-Item-Creation";

import ProductObject from "../../view-models/Product";
import { ListItemType } from "../../typescript/enums/crud/List-Item-Type";

// Paggination
import PaggingContainer from "../common/pagging/Pagging-Container";

export default class ProductList extends React.Component<any, any> {
  componentWillMount() {
    this.props.actions.getProducts();
  }

  transformData = () => {
    const list = new ListItemObject<ProductObject>();
    if (this.props.products.data != undefined) {
      this.props.products.data.forEach(
        (arg: {
          id: number;
          name: string;
          price: number;
          isDeleted: boolean;
        }) => {
          const newObj = new ProductObject(
            arg.id,
            arg.name,
            arg.price,
            arg.isDeleted
          );

          if (!newObj.getIsDeleted) {
            // Add item if isnt deleted
            list.objects.push(newObj);
          }
        }
      );
      return list;
    }
  };

  render() {
    return (
      <>
        <ListTitle crud>Evidence výrobků</ListTitle>
        <ListContainer
          data={this.transformData()}
          updateMethod={this.props.actions.updateProduct}
          deleteMethod={this.props.actions.deleteProduct}
          columnNames={["Název výrobku", "Cena"]}
          emptyError="Seznam výrobků je prázdný"
          type={ListItemType.Product}
        />
      </>
    );
  }
}
