//-----------------------------------------------------------------------
// <copyright file="Stats-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Stats page
//-----------------------------------------------------------------------

import * as React from 'react';
import { Container } from 'reactstrap';
import StatsDecision from '../../components/stats/Stats-Decision';

export default  () => {
    return (
        <Container>
           <StatsDecision />
        </Container>
    )
}