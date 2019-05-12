//-----------------------------------------------------------------------
// <copyright file="Company-Stats-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Company statistics page
//-----------------------------------------------------------------------

import * as React from 'react';
import { Container, Col, Row } from 'reactstrap';
// Sidebar company info
import SidebarCompanyInfo from '../../components/stats/company/Company-Summary-Stats';
// Graph representation
import { Line } from 'react-chartjs-2';
// PDF service generator
import PdfGenerator from '../../helpers/pdf/Doc-Service';

import PageTitle from '../../components/common/title/Page-Title';


// Api for getting graph data
import StatsApi from '../../api/endpoints/StatsApi';

// Graph helper
import { TransformhDataToGraph } from '../../helpers/graph/Graph-Helper';


export default class CompanyStatsPage extends React.Component {

  state = {
    graphData: []
  }

  componentDidMount() {

    StatsApi.getSummaryGraphData().then((res => {

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

    const graphTitle = 'Měsíční přehled tržeb (Rok 2019)';

    return TransformhDataToGraph(this.state.graphData, labels, graphTitle);
  }


  render() {

    return (
      <Container>
      <div id='graph'>
  
      <PageTitle stats>Měsíční přehled tržeb (Rok 2019)</PageTitle>
      
      <Row>
          <Col xs="12">
          <SidebarCompanyInfo />
          <button onClick={() => PdfGenerator.createPdf(document.getElementById('graph'))}>Export PDF</button>
            <Line height={125}  data={this.transformGraphData() as any} />
          </Col>
  
          <Col md="2" xs="12">
            
          </Col>
        </Row>
      </div>  
      </Container>
    );

  }


  
};
