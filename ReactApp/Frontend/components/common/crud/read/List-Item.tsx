//-----------------------------------------------------------------------
// <copyright file="List-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Single Content item of all crud lists
//-----------------------------------------------------------------------

import * as React from "react";

var uniqid = require("uniqid");


import { ListItemType } from '../../../../typescript/enums/crud/List-Item-Type';

// Styled helper
import styled from "styled-components";
import CustomerObject from "../../../../helpers/types/Customer-Object";
import ProductObject from "../../../../helpers/types/Product-Object";

export default class ListItem extends React.Component<any, any> {
  
  // Selection of type of crud view
  area = (areaName: any) => {
    switch (areaName) {
      case ListItemType.Customer:
        return (
          <>
            <td>
              <div>{(this.props.arg as CustomerObject).firstname}</div>
            </td>
            <td>
              <div>{(this.props.arg as CustomerObject).lastname}</div>
            </td>
          </>
        );

      case ListItemType.Product:
        const productEntity = this.props.arg as ProductObject;
        return (
        <>
          <td>
            <div>{productEntity.name}</div>
          </td>
        </>
        );
        
    }
  };

  render() {
    const CustomerListOptions = styled.span`
      margin-left: 10vw;
    `;

    return (
      <tr key={uniqid()}>
        <th scope="row">{this.props.iteration}</th>
        {
          this.area(this.props.arg.constructor.name)
        }
        
        <td>
          <span>N/A</span>
          <CustomerListOptions />
        </td>
      </tr>
    );
  }
}
