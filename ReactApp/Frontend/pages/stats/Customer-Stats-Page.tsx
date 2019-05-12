//-----------------------------------------------------------------------
// <copyright file="Customer-Stats-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customers statistics page
//-----------------------------------------------------------------------

import * as React from "react";

import { Container, Row, Col } from "reactstrap";

import PageTitle from "../../components/common/title/Page-Title";
import { Line } from "react-chartjs-2";

// PDF service generator
import PdfGenerator from "../../helpers/pdf/Doc-Service";

// Api for getting graph data
import StatsApi from '../../api/endpoints/StatsApi';

// Graph helper
import { TransformhDataToGraph } from '../../helpers/graph/Graph-Helper';

export default class CustomerStatsPage extends React.Component<any, any> {

  state = {

    graphData: []

  }

  componentDidMount() {

    StatsApi.getAvgValuationGraphData().then((res => {

      this.setState({
        graphData: res.data
      });
    }));

  }

  transformGraphData = () => {
    const labels = [
      "Leden",
      "Unor",
      "Březen",
      "Duben",
      "Květen",
      "Červen",
      "Červenec",
      "Srpen",
      "Září",
      "Říjen",
      "Listopad",
      "Prosinec"
    ];

    const graphTitle = 'Průměrná útrata zákazníků (Rok 2019)';

    return TransformhDataToGraph(this.state.graphData, labels, graphTitle);
  }


  

  render() {
    return (
      <Container>
        <div id="graph">
          <PageTitle stats>Průměrná útrata zákazníků (Rok 2019)</PageTitle>

          <Row>
            <Col xs="12">
              <button
                onClick={() =>
                  PdfGenerator.createPdf(document.getElementById("graph"))
                }
              >
                Export PDF
              </button>
              <Line height={125} data={this.transformGraphData() as any} />
            </Col>

            <Col md="2" xs="12" />
          </Row>
        </div>
      </Container>
    );
  }
}
