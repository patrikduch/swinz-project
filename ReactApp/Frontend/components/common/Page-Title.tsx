//-----------------------------------------------------------------------
// <copyright file="Page-Title.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Component that represents main title
//-----------------------------------------------------------------------

import * as React from "react";

// Styled helper
import styled, { css } from 'styled-components';

const Title: any = styled.h2`
  /* Shared styles for all titles */
  text-align: center;
  font-style: bolder;

  ${(props: any) => {
    if (props.stats) {
      /* Title for statistics (customer statistics, company statistics) */
      return css`
        margin-top: 2vh;
        font-size: 1.2em;
      `;
    } else if (props.crud) {
      /* Title for crud operations (orders, customers, etc.) */
      return css`
        margin-top: 5vh;
      `
    }
  }}
`;

export default ({ children, crud, stats }: any) => {
  return (
    <Title stats={stats} crud={crud}>
      {children}
    </Title>
  );
};
