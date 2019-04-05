//-----------------------------------------------------------------------
// <copyright file="List-Headings.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Universal list heading for all READ operations
//-----------------------------------------------------------------------

// React dependency
import * as React from 'react';
// Styled helper
import styled  from 'styled-components';
// Props interface
import IListHeadingsProps from '../../../../typescript/interfaces/components/common/crud/read/IList-Headings-Props';
// List item element
import ListHeadingsItem from './List-Headings-Item';

// Stylization 
const Thead = styled.thead`
`;

export default (props:IListHeadingsProps) => {
    return (
        <Thead>
            <ListHeadingsItem columns={props.columns}/>
        </Thead>
    );
}