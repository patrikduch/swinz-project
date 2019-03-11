//-----------------------------------------------------------------------
// <copyright file="Customers-Edit.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Edit of specific customer from the list
//-----------------------------------------------------------------------

import *  as React from 'react';

import CustomerModal from '../common/modals/Classic-Modal';


export default (props: any) => {

    return (
        <span className='customer-edit-btn'>
            <CustomerModal title={props.title} data = { props.data } btnIcon='edit' />
        </span>
    );


}