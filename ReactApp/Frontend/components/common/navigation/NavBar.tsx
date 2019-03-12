//-----------------------------------------------------------------------
// <copyright file="Home.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Navbar component
//-----------------------------------------------------------------------
import * as React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';

import INavBarProps from '../../../typescript/interfaces/components/common/navigation/INavBar-Props';
import INavBarState from '../../../typescript/interfaces/components/common/navigation/INavBar-State';

export default class NavBar extends React.Component<INavBarProps,INavBarState> {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{this.props.title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}