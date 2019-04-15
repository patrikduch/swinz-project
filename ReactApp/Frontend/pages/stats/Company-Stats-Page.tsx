//-----------------------------------------------------------------------
// <copyright file="Company-Stats-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Company statistics page
//-----------------------------------------------------------------------

import * as React from "react";
import { Container, Input, Col, Row } from "reactstrap";

// Sidebar company info
import SidebarCompanyInfo from '../../components/stats/company/Company-Summary-Stats';


export default () => {


  return (
    <Container fluid>
    
      <Row>
        <Col xs="3">
        
        <p>Měsiční filtrace služeb</p>
        
        </Col>
        <Col xs="3"></Col>
      </Row>
      <Row>
        <Col xs="9">


       


        </Col>


        <Col md="2" xs="12">
          <SidebarCompanyInfo />
        
        </Col>
      </Row>

    </Container>
  );
};
