//---------------------------------------------------------------------------------------
// <copyright file="List-Body.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Container for list content
//----------------------------------------------------------------------------------------

import * as React from 'react';

// Styled helper
import styled from 'styled-components';

import { Table } from 'reactstrap';
import ListHeadings from './List-Headings';


// Container that wrappps list of customers
const Container = styled.div`
  //  margin-top: 1.0vh;
`;

import ListBody from '../read/List-Body';


export default (props:any) => {
    return (
       <Container>
           <Table>
                <ListHeadings columns={props.columnNames} />
                <ListBody data={props.data} updateMethod={props.updateMethod} deleteMethod={props.deleteMethod} />
           </Table>
       </Container>
    )
}


