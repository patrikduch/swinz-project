//-----------------------------------------------------------------------
// <copyright file="Company-Summary-Stats.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Summary sidebar company statistics
//-----------------------------------------------------------------------

import * as React from 'react';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardText from 'reactstrap/lib/CardText';

import StatsApi from '../../../api/endpoints/StatsApi';

export default class CompanySummaryStats extends React.Component<any, any> {

  state = {
    customerCount: null,
    productCount: null,
    latestIncome: null,
    soldTotal: null,
  }

  componentWillMount() {
    StatsApi.getCustomerSummary().then((arg => {
      this.setState({
        customerCount: arg.data.customerCount,
        productCount: arg.data.productCount,
        latestIncome: arg.data.latestIncome,
        soldTotal: arg.data.soldCount
      })
    }));
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>Statistika firmy</CardTitle>
          <CardText>
            Zákazníků celkem: {this.state.customerCount} <br/>
            Výrobků celkem:  {this.state.productCount} <br/>
            Tržba letošního roku: {this.state.latestIncome},-Kč  <br/>
            Prodanych vyrobků: {this.state.soldTotal} <br/>
          </CardText>
        </CardBody>
      </Card>   
      
    )
  }

}