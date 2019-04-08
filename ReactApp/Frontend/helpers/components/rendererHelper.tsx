//-----------------------------------------------------------------------
// <copyright file="rendererHelper.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Set of helper functions for component manipulations
//-----------------------------------------------------------------------

import * as React from "react";

import { ListItemType } from "../../typescript/enums/crud/List-Item-Type";
import CustomerObject from "../../view-models/Customer";
import ProductObject from "../../view-models/Product";
import OrderObject from '../../view-models/Order';
var uniqid = require("uniqid");

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
            <div>{entity.getId}</div>
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
  return uniqid.process();
}
