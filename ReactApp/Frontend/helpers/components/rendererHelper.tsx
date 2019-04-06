//-----------------------------------------------------------------------
// <copyright file="rendererHelper.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Set of helper functions for component manipulations
//-----------------------------------------------------------------------

import * as React from 'react';

import { ListItemType } from '../../typescript/enums/crud/List-Item-Type';
import CustomerObject from '../../view-models/Customer';
import ProductObject from '../../view-models/Product';
var uniqid = require('uniqid');

// Selection of type of crud view
export function area (areaName: any, obj: any) {
  switch (areaName) {
    case ListItemType.Customer:
      return (
        <>
          <td>
            <div>{(obj as CustomerObject).getFirstname}</div>
          </td>
          <td>
            <div>{(obj as CustomerObject).getLastname}</div>
          </td>
        </>
      );

    case ListItemType.Product:
      const productEntity = obj as ProductObject;
      return (
      <>
        <td>
          <div>{productEntity.getName}</div>
        </td>
        <td>
          <div>{productEntity.getPrice}</div>
        </td>
      </>
      );
      
  }
};

// Helper method for getting unique identifier for react elements
export function getUniqueId() {
  return uniqid.process();
}
