//-----------------------------------------------------------------------
// <copyright file="Order-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Order page
//-----------------------------------------------------------------------

import * as React from 'react';
import { Container } from 'reactstrap';

import OrderListComp from '../../redux/containers/orders/Order-List-Container';


export default  () => {
    return (
        <Container>
            <OrderListComp/>
        </Container>
    );
}