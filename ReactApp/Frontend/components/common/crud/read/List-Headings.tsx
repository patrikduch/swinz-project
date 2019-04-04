//-----------------------------------------------------------------------
// <copyright file="List-Headings.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Universal list heading for all READ operations
//-----------------------------------------------------------------------

// Styled helper
import styled  from 'styled-components';
import * as React from 'react';

// Creating styled components
const Thead = styled.thead`
`;

// Props interface
import IListHeadingsProps from '../../../../typescript/interfaces/components/common/crud/read/IList-Headings-Props';
// List item element
import ListHeadingsItem from './List-Headings-Item';

export default (props:IListHeadingsProps) => {
    return (
        <Thead>
            <ListHeadingsItem columns={props.columns}/>
        </Thead>
    );
}