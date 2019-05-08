//-----------------------------------------------------------------------
// <copyright file="List-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Single Content item of all crud lists
//-----------------------------------------------------------------------

// React dependency
import * as React from 'react';
// Styled helper
import styled from 'styled-components';
// Renderer helper methods
import { getUniqueId } from '../../../../helpers/components/rendererHelper';
// Item deletion
import ListItemDeletion from '../delete/List-Item-Deletion';
// Item update
import ListItemUpdate from '../update/List-Item-Update';


import { DateFormat } from '../../../../helpers/time/Date-Format-Helper';

// Props interface
import IListItemProps from '../../../../typescript/interfaces/components/common/crud/read/IList-Item-Props';
// State interface
import IListItemState from '../../../../typescript/interfaces/components/common/crud/read/IList-Item-State';


// Enum type to determine type of passed component which will be rendered by area method
import { ListItemType } from '../../../../typescript/enums/crud/List-Item-Type';
// View model objects
import CustomerObject from '../../../../view-models/Customer';
import ProductObject from '../../../../view-models/Product';
import OrderObject from '../../../../view-models/Order';

// Modal for displaying products for specific order
import OrderInfo from '../../../../components/orders/modals/Order-Info-Modal';

// Modal to display customer information
import CustomerInfoModal from '../../../../components/customers/modals/Customer-Info-Modal';
import { Link } from 'react-router-dom';


const DataRenderer = (props:any) => {

  const StatisticsRedirect = () => {
    return (
      <Link to='/stats/customers/average'>ID</Link>
    );
  }

  switch (props.arg.constructor.name) {
    case ListItemType.Customer:
      return (
        <>
          <th scope='row'> {props.stats == true ? <StatisticsRedirect /> : props.iteration}</th>
          <td>
            <div>{(props.arg as CustomerObject).getFirstname}</div>
          </td>
          <td>
            <div>{(props.arg as CustomerObject).getLastname}</div>
          </td>
          <td>
            <div>N/A</div>
          </td>
          
        </>
      );

    case ListItemType.Product: {
      const entity = props.arg as ProductObject;
      return (
        <>
          <td>
            <div>{entity.getName}</div>
          </td>
          <td>
            <div>{entity.getPrice} <span>,-Kč</span></div>
          </td>
        </>
      );
    }

    case ListItemType.Order: {
      const entity = props.arg as OrderObject;


      return (
        <>
          <th scope='row'>{props.iteration}</th>
          <td>
            <div>{DateFormat(entity.GetCreationDate)}</div>
          </td>
          <td>
            <div>
              <CustomerInfoModal text={entity.getCustomerId} />
            </div>
          </td>
          <td>
            <OrderInfo products={entity.getProducts} />
          </td>
        </>
      );
    }

    default:
      return <p>Crud configuration error</p>;
  }
}

export default class ListItem extends React.Component<IListItemProps, IListItemState> {
  render() {
    return (
      <tr key={ getUniqueId() }>
        <DataRenderer arg={this.props.arg} iteration={this.props.iteration} stats={this.props.stats}/>
        <ListItemDeletion itemIdentifier={this.props.arg.id} deleteMethod={this.props.deleteMethod} />
      </tr>
    );
  }
}
