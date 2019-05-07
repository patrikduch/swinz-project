//-----------------------------------------------------------------------
// <copyright file="Home-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Component which represents administration index
//-----------------------------------------------------------------------

import * as React from "react";
import { Container} from 'reactstrap';

import DashboardContainer from '../components/dashboard/Dashboard-Container';

export default class HomePage extends React.Component {
  render() {
    return (
      <Container>
          <DashboardContainer />
      </Container>
    );
  }
}
