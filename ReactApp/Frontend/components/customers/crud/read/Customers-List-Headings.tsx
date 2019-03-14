//-----------------------------------------------------------------------
// <copyright file="Customer-List-Headings.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Headings of customers list
//-----------------------------------------------------------------------

import * as React from 'react';

// Styled helper
import styled, { css } from 'styled-components';

// Creating styled components
const Thead = styled.thead`

`;

const Tr = styled.tr`
    border: 1px solid black;
`;


const Th = styled.th`
    border: 1px solid black;

`;

export default () => {
    return (
        <Thead>
            <Tr>
                <Th>#</Th>
                <Th>Křestní jméno</Th>
                <Th>Přijmení</Th>
                <Th>Nárok na slevu</Th>
            </Tr>
        </Thead>
    );
}