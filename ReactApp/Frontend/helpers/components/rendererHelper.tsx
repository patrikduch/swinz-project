//-----------------------------------------------------------------------
// <copyright file="rendererHelper.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Set of helper functions for component manipulations
//-----------------------------------------------------------------------

// React dependency
import * as React from 'react';

// Enum type to determine type of passed component which will be rendered by area method
import { ListItemType } from '../../typescript/enums/crud/List-Item-Type';
// View model objects
import CustomerObject from '../../view-models/Customer';
import ProductObject from '../../view-models/Product';
import OrderObject from '../../view-models/Order';

// Modal for displaying products for specific order
import OrderInfo from '../../components/orders/modals/Order-Info-Modal';

// Modal to display customer information
import CustomerInfoModal from '../../components/customers/modals/Customer-Info-Modal';

// Selection of type of crud view
export function area(areaName: any, obj: any, iteration: number) {
  switch (areaName) {
    case ListItemType.Customer:
      return (
        <>
          <th scope="row">{iteration}</th>
          <td>
            <div>{(obj as CustomerObject).getFirstname}</div>
          </td>
          <td>
            <div>{(obj as CustomerObject).getLastname}</div>
          </td>
        </>
      );

    case ListItemType.Product: {
      const entity = obj as ProductObject;
      return (
        <>
          <th scope="row">{iteration}</th>
          <td>
            <div>{entity.getName}</div>
          </td>
          <td>
            <div>{entity.getPrice}</div>
          </td>
        </>
      );
    }

    case ListItemType.Order: {
      const entity = obj as OrderObject;
      return (
        <>
          <th scope="row">{iteration}</th>
          <td>
            <div>{entity.GetCreationDate}</div>
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

// Helper method for getting unique identifier for react elements
export function getUniqueId() {
  var uniqid = require("uniqid");
  return uniqid.process();
}
