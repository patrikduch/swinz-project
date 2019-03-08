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
            <NavItem className='react-router-nav-items'>
              <Link to='/customers'>Zákaznici</Link>
            </NavItem>

            <NavItem className='react-router-nav-items'>
              <Link to='/products'>Výrobky</Link>
            </NavItem>

            <NavItem className='react-router-nav-items'>
              <Link to='/orders'>Objednávky</Link>
            </NavItem>

            <NavItem className='react-router-nav-items'>
              <Link to='/stats'>Statistiky</Link>
            </NavItem>
          
          </Nav>
         
        </div>
      );
    }
  }