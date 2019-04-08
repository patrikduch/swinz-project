//---------------------------------------------------------------------------------------
// <copyright file="Order-Info-Modal-Table.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Table for displaing customers for specific order
//----------------------------------------------------------------------------------------

import * as React from 'react';
import { Table } from 'reactstrap';

export default (props: any) => {
  const displayProducts = () => {
    return props.products.map((arg: any) => {
      return (
        <tr>
          <th scope="row">{arg.id}</th>
          <td>{arg.name}</td>
          <td>{arg.price}</td>
        </tr>
      );
    });
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Název výrobku</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>{displayProducts()}</tbody>
    </Table>
  );
};
