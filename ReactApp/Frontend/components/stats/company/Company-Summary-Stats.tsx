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

export default () => {
    return (
        <Card>
        <CardBody>
          <CardTitle>Statistika firmy</CardTitle>
          <CardText>
            Zákazníků celkem: <br/>
            Tržba letošního roku: <br/>
            Prodanych vyrobků: <br/>
          </CardText>
        </CardBody>
      </Card>   
    )
}