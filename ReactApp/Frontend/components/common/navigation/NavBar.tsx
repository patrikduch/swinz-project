//-----------------------------------------------------------------------
// <copyright file="NavBar.tsx" website="Patrikduch.com">
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
  Nav
} from 'reactstrap';

// Props interface
import INavBarProps from '../../../typescript/interfaces/components/common/navigation/INavBar-Props';
// State interface
import INavBarState from '../../../typescript/interfaces/components/common/navigation/INavBar-State';
// React router
import { Link } from 'react-router-dom';
// Main title of app
import HeaderTitle from '../title/Header-Title';


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
        <Navbar color='light' light expand='md'>
            <Link to='/'>
              <HeaderTitle>{this.props.title}</HeaderTitle>
            </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
            {this.props.children}
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}