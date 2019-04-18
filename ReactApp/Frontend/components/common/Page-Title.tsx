//-----------------------------------------------------------------------
// <copyright file="Page-Title.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Component that represents main title
//-----------------------------------------------------------------------

import * as React from 'react';

// Styled helper
import styled, { css } from 'styled-components';

const Title : any = styled.h2`
    
    ${(props : any) => props.crud && css` /* Title for crud operations (orders, customers, etc.) */
      margin-top: 5.0vh;
      text-align: center;
    `}

    color: black;
    font-size: 1.8em;
    text-align: center;
  `;

export default ({children, crud} : any)  => {

    return <Title crud={crud}>{children}</Title>;
}