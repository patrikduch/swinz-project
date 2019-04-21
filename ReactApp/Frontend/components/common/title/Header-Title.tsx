//-----------------------------------------------------------------------------------------
// <copyright file="Header-Title.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Component that represents title of app (that is displayed in navbar => main navigation)
//------------------------------------------------------------------------------------------

import * as React from 'react';

// Styled helper
import styled from 'styled-components';

// Creating styled components
const Title = styled.h1`
  font-size: 1.4em;
`;

export default (props: { children: React.ReactNode}) => <Title>{props.children}</Title>;
