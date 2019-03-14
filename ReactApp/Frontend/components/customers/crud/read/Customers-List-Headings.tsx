//-----------------------------------------------------------------------
// <copyright file="Customer-List-Headings.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Headings of customers list
//-----------------------------------------------------------------------

import * as React from 'react';

// Styled helper
import styled from 'styled-components';

const Thead = styled.thead``;
const Tr = styled.tr``;
const Th = styled.th``;

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