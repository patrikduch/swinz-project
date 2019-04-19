//-----------------------------------------------------------------------
// <copyright file="Customer-Stats-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Customers statistics page
//-----------------------------------------------------------------------

import * as React from 'react';
import { Container } from 'reactstrap';

import { Line } from 'react-chartjs-2';


const data = {
    labels: ['Leden', 'Unor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
    datasets: [
      {
        label: 'Průměrná útrata zákaznika',
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
        data: [50, 2, 3, 4, 5, 6, 7]
      }
    ]
  };

  import PdfGenerator from '../../helpers/pdf/Doc-Service';

  export default class CustomerStatsPage extends React.Component<any, any> {

    render() {
      return (
        <Container>
          <div id ='graph'>
            <Line  data={data as any} />
          </div>
          <button onClick={() => PdfGenerator.createPdf(document.getElementById('graph'))}>Export PDF</button>
        </Container>

        )
  }

  
}