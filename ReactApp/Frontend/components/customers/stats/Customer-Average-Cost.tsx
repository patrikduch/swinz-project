

import * as React from 'react';


// Styled helper
import styled from "styled-components";

import { Container, Row, Col } from "reactstrap";

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
      label: "Průměrná útrata zákaznika",
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
      data: [50, 2, 3, 4, 5, 6, 7]
    }
  ]
};





const Testik = styled.div`
  color: black;
  font-size: 1.4em;
  font-weight: bolder;
  padding-left: 1vw;
  padding-top: 1vh;
`;


// Title of page
import CustomerStatsTitle from "../../../components/common/title/Page-Title";

import Graph from '../../../components/common/graph/Graph-View';

export default () => {

    return (

        <div>

<Testik id="graph">
        <CustomerStatsTitle stats>Průměrná útrata zákaznika</CustomerStatsTitle>
          <Graph data={data} />
        </Testik>

        </div>
    )
}