import * as React from "react";

// Reactstrap grid dependencies
import { Row, Col } from "reactstrap";
import { Line } from "react-chartjs-2";

import PdfGenerator from "../../../helpers/pdf/Doc-Service";

export default (props: any) => {
  return (
    <div>
      <Row>
        <Col xs="8">
          <Line
            options={{
              legend: {
                display: false
              }
            }}
            data={props.data as any}
          />
        </Col>

        <Col xs="3">
          <button
            onClick={() =>
              PdfGenerator.createPdf(document.getElementById("graph"))
            }
          >
            Export PDF
          </button>
        </Col>
      </Row>
      <Col xs="auto" />
    </div>
  );
};
