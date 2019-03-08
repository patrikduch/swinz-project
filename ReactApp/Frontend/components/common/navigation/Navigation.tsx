//-----------------------------------------------------------------------
// <copyright file="Navigation.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Navigation component
//-----------------------------------------------------------------------

import * as React from 'react';

import { Link } from "react-router-dom";

import { Nav, NavItem } from 'reactstrap';

export default class Example extends React.Component {
    render() {
      return (
        <div>
          <Nav className='justify-content-center d-flex flex-fill'>
            <NavItem>
              <Link to='/customers'>Zákaznici</Link>
            </NavItem>

            <NavItem>
              <Link to='/products'>Výrobky</Link>
            </NavItem>

            <NavItem>
              <Link to='/orders'>Objednávky</Link>
            </NavItem>

            <NavItem>
              <Link to='/stats'>Statistiky</Link>
            </NavItem>
          
          </Nav>
          <hr />
         
        </div>
      );
    }
  }