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

    let graphData = [0,0,0,0,0,0,0,0,0,0,0,0]

    const data = {
      labels: [
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
      ],
      datasets: [
        {
          label: 'Průměrná útrata zákazníků (Rok 2019)',
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: graphData
        }
      ]
    };

    

    if (this.state.graphData.length != 0) {
      

      for(let i =0; i<= graphData.length; i++) {
        
        const entry : any = this.state.graphData[i];

        if (entry != null) {
          graphData[entry.monthId-1] = entry.totalSum

        }
      }
    }
    return data;
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
