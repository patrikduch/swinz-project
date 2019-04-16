//-----------------------------------------------------------------------
// <copyright file="Company-Stats-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Company statistics page
//-----------------------------------------------------------------------

import * as React from 'react';
import { Container, Button, Col, Row } from 'reactstrap';

import DatePickerField from '../../components/common/calendar/Date-Picker-Field';

// Sidebar company info
import SidebarCompanyInfo from '../../components/stats/company/Company-Summary-Stats';



export default () => {
  return (
    <Container fluid>
      <Row>
        <Col xs="9">
          <h2>Měsiční filtrace tržeb</h2>
          <span>Od </span>
          <DatePickerField />
          <span>&nbsp;Do&nbsp;</span>
          <DatePickerField />
          <br/><br/>
          <Button>Vyhledat...</Button>
        </Col>

        <Col md="2" xs="12">
          <SidebarCompanyInfo />
        </Col>
      </Row>
    </Container>
  );
};
