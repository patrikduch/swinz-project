//-----------------------------------------------------------------------
// <copyright file="Customers-Remove.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Remove choosen customer
//-----------------------------------------------------------------------

import *  as React from 'react';

import DecisionModal from '../common/modals/Decision-Modal';

export default (props: any) => {

    return (
        <span>
            <DecisionModal title='Opravdu chcete smazat tohoto zákaznika' event={ props.removeCustomer } />
        </span>
        
    );


}