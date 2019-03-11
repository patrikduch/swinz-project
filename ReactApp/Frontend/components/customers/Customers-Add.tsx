//-----------------------------------------------------------------------
// <copyright file="Customers-Edit.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Add new customer
//-----------------------------------------------------------------------

import *  as React from 'react';

import CustomerModal from '../common/modals/Classic-Modal';


export default (props: any) => {

    const [customerState] = React.useState({
        isModalOpen: false
    });

    return (
        <span className='customer-edit-btn'>
            <CustomerModal title={ props.title } isModalOpen = { customerState.isModalOpen } btnIcon='plus'  />
        </span>
    );


}