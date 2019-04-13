//-----------------------------------------------------------------------
// <copyright file="List-Title.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Universal title specification for different areas of lists
//-----------------------------------------------------------------------

// React dependency
import * as React from 'react';
// Styled helper
import styled from 'styled-components';
// Props interface
import IListTitleProps from '../../../../typescript/interfaces/components/common/crud/read/IList-Title-Props';

// Title of customer page
const Title = styled.h2`
    margin-top: 5.0vh;
    text-align: center;
`;

export default (props: IListTitleProps) => {
  return (
    <Title>
      { props.children }
    </Title>
  )
};
