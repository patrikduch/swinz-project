//---------------------------------------------------------------------------------------
// <copyright file="Customer-Crud-List-Container.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customer list container for constructuring crud customer`s list
//----------------------------------------------------------------------------------------

import * as React from "react";

// Redux connect component
import CustomerList from "../../redux/containers/customers/Customer-List-Container";

// Page title
import PageTitle from "../../components/common/title/Page-Title";

export default () => {
  return (
    <>
      <PageTitle crud>Evidence zákazníků</PageTitle>
      <CustomerList crud />
    </>
  );
};
