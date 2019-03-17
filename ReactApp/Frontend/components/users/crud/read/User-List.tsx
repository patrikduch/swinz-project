//-----------------------------------------------------------------------
// <copyright file="User-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// User list which consists table with data manipulations
//-----------------------------------------------------------------------

import * as React from 'react';

import { Table } from 'reactstrap';


// Styled helper
import styled from 'styled-components';
// Container that wrappps list of customers
const Container = styled.div`
  //  margin-top: 1.0vh;
`;

// Title of customer page
const Title = styled.h2`

    margin-top: 5.0vh;
    text-align: center;
`;

export default class UserList extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.getCustomers();
    }

    getCustomers = () => {

        console.log(this.props);

        if (this.props.users != undefined) {
            
            return (
                <Container>
                    {this.props.users.map((arg:any) => {
                        return <p key={arg.id}>{arg.id},{arg.username}</p>
                    })}
                    
                </Container>
            );
        }
        return null
    }

    render() {
        return (
            <div>
                <Title>Evidence zákazniků</Title>

                {this.getCustomers()}
                
            </div>
        );
    }
}

