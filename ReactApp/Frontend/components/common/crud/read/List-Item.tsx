//-----------------------------------------------------------------------
// <copyright file="List-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Single Content item of all crud lists
//-----------------------------------------------------------------------

import * as React from "react";

var uniqid = require("uniqid");

// Styled helper
import styled from "styled-components";
import { area } from "../../../../helpers/components/rendererHelper";

export default class ListItem extends React.Component<any, any> {

  render() {
    const CustomerListOptions = styled.span`
      margin-left: 10vw;
    `;

    return (
      <tr key={uniqid()}>
        <th scope="row">{this.props.iteration}</th>
        {
          area(this.props.arg.constructor.name,this.props.arg)
        }
        
        <td>
          <span>N/A</span>
          <CustomerListOptions />
        </td>
      </tr>
    );
  }
}
