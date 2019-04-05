//-----------------------------------------------------------------------
// <copyright file="rendererHelper.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Set of helper functions for component manipulations
//-----------------------------------------------------------------------

import * as React from 'react';

import { ListItemType } from "../../typescript/enums/crud/List-Item-Type";
import CustomerObject from "../types/Customer-Object";
import ProductObject from "../types/Product-Object";
var uniqid = require('uniqid');

// Selection of type of crud view
export function area (areaName: any, obj: any) {
  switch (areaName) {
    case ListItemType.Customer:
      return (
        <>
          <td>
            <div>{(obj as CustomerObject).firstname}</div>
          </td>
          <td>
            <div>{(obj as CustomerObject).lastname}</div>
          </td>
        </>
      );

    case ListItemType.Product:
      const productEntity = obj as ProductObject;
      return (
      <>
        <td>
          <div>{productEntity.name}</div>
        </td>
      </>
      );
      
  }
};

// Helper method for getting unique identifier for react elements
export function getUniqueId() {
  return uniqid.process();
}
