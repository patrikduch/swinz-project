//-----------------------------------------------------------------------
// <copyright file="Company-Stats-Page.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Company statistics page
//-----------------------------------------------------------------------

import * as React from 'react';
import { Container } from 'reactstrap';

export default  () => {
    return (
        <Container>
          Statistika firmy
          <div>
            <p>Celkem prodaných výrobku: 25</p>
            <p>Roční celková tržba: 0 kč</p>
          </div>
        </Container>
    )
}