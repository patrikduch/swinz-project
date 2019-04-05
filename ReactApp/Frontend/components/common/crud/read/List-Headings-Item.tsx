//-----------------------------------------------------------------------
// <copyright file="List-Headings-Item.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Universal list item heading for all READ operations
//-----------------------------------------------------------------------

// React dependency
import * as React from 'react';
// Styled helper
import styled  from 'styled-components';
// Props interface
import IListHeadingsProps from '../../../../typescript/interfaces/components/common/crud/read/IList-Headings-Props';
// Renderer helper
import { getUniqueId } from '../../../../helpers/components/rendererHelper';

// Stylization 
const Tr = styled.tr`
    border: 1px solid black;
`;
const Th = styled.th`
    border: 1px solid black;
`;

export default (props:IListHeadingsProps) => {
    return (
        <Tr>
            {
                props.columns.map((arg: string) => {
                    return <Th key={ getUniqueId() }>{arg}</Th>;
                })
            }    
        </Tr>
    );
}