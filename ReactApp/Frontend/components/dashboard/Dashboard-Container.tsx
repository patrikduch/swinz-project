import * as React from "react";

import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import styled from "styled-components";

// Container that wrappps list of customers
// Stylization
const InfoItem = styled.div`
  background-color: #275079;
  min-height: 150px;
  min-width: 50px;
  font-size: 20px;
  color: white;
  text-align: center;
  padding-top: 48px;
  border-radius: 25px;
  margin-bottom: 5px;
`;

export default () => {
  return (
    <div>
      <Row>
        <Col xs="12" md='3'>
          <Card body>
            <CardTitle>Uživatelé: 45</CardTitle>
          </Card>
        </Col>
        <Col xs="12" md='3'>
          <Card body>
            <CardTitle>Objednávky: 45</CardTitle>
          </Card>
        </Col>

        <Col xs="12" md='3'>
          <Card body>
            <CardTitle>Zákaznici: 45</CardTitle>
          </Card>
        </Col>

        <Col xs="12" md='3'>
          <Card body>
            <CardTitle>Výrobky: 45</CardTitle>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
