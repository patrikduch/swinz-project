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

export default () => {

  const data = {
    labels: ['Leden', 'Unor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
    datasets: [
      {
        label: 'Objem tržeb za jednotlivé měsíce',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [50, 2, 3, 4, 5, 6, 7, 100, 0, 20,40,70]
      }
    ]
  };

  return (
    <Container fluid>
    <div id='graph'>

    <PageTitle stats>Měsíční přehled tržeb (Rok 2019)</PageTitle>
    
    <Row>
        <Col xs="9">
          <Line  data={data as any} />
        </Col>

        <Col md="2" xs="12">
          <SidebarCompanyInfo />
        </Col>
      </Row>

    </div>


    <button onClick={() => PdfGenerator.createPdf(document.getElementById('graph'))}>Export PDF</button>

    </Container>
  );
};
