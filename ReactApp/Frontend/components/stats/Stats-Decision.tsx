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


import StatsTitle from '../../components/common/PageTitle';


export default () => {
  const LinkContent = styled.p`
    color: black;
    font-size: 1.4em;
    font-weight: bolder;
  `;

  return (
    <Container className="container-spacing">

      <StatsTitle>Přehled statistika</StatsTitle>


      <Link to="">
        <LinkContent>Statistika zákazníků</LinkContent>
      </Link>

      <Link to="">
        <LinkContent>Statistika firmy</LinkContent>
      </Link>
      
    </Container>
  );
};
