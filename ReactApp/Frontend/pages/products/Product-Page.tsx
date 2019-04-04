//-----------------------------------------------------------------------
// <copyright file="Product-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Product page
//-----------------------------------------------------------------------

import * as React from 'react';

import { Container } from 'reactstrap';
import ProductListComp from '../../redux/containers/products/Product-List-Container';



export default  () => {
    return (
        <Container>
           <ProductListComp/>
        </Container>
    );
}