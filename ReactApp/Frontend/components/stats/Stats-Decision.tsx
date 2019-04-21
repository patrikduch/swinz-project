//-----------------------------------------------------------------------
// <copyright file="Stats-Decision.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Introduction component for statistics page
//-----------------------------------------------------------------------

import * as React from 'react';
import { Container } from 'reactstrap';
// Styled helper
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Title of page
import StatsTitle from '../common/title/Page-Title';


export default () => {
  const LinkContent = styled.p`
    color: black;
    font-size: 1.4em;
    font-weight: bolder;
  `;

  return (
    <Container className="container-spacing">

      <StatsTitle>Přehled statistik</StatsTitle>

      <Link to="/stats/customers">
        <LinkContent>Statistika zákazníků</LinkContent>
      </Link>

      <Link to="/stats/company">
        <LinkContent>Statistika firmy</LinkContent>
      </Link>
      
    </Container>
  );
};
