//-----------------------------------------------------------------------
// <copyright file="List-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Single Content item of all crud lists
//-----------------------------------------------------------------------

// React dependency
import * as React from "react";
// Styled helper
import styled from "styled-components";
// Renderer helper methods
import { area, getUniqueId } from "../../../../helpers/components/rendererHelper";
// Item deletion
import ListItemDeletion from '../delete/List-Item-Deletion';
// Props interface
import IListItemProps from '../../../../typescript/interfaces/components/common/crud/read/IList-Item-Props';
// State interface
import IListItemState from '../../../../typescript/interfaces/components/common/crud/read/IList-Item-State';

export default class ListItem extends React.Component<IListItemProps, IListItemState> {
  render() {
    const ListOptions = styled.span`
      margin-left: 10vw;
    `;

    return (
      <tr key={ getUniqueId() }>
        <th scope="row">{this.props.iteration}</th>
        {
          area(this.props.arg.constructor.name,this.props.arg)
        }
        <td>
          <ListOptions>
            <ListItemDeletion itemIdentifier={this.props.arg.id} deleteMethod={ this.props.deleteMethod}  />
          </ListOptions>
        </td>
      </tr>
    );
  }
}
