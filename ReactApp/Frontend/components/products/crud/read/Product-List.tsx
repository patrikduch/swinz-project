//---------------------------------------------------------------------------------------
// <copyright file="Product-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Product list which consists table with data manipulations (redux connected component)
//----------------------------------------------------------------------------------------

import * as React from 'react';

// Styled helper
import styled from 'styled-components';

import { Table } from 'reactstrap';

import ListHeadings from '../../../common/crud/read/List-Headings';


// Container that wrappps list of products
const Container = styled.div`
  //  margin-top: 1.0vh;
`;



export default class ProductList extends React.Component<any, any> {

    componentDidMount() {
        console.log(this.props);
        console.log(this.props.products.data);
    }

    componentWillMount() {
        this.props.actions.getProducts();
    }

    renderProducts = () => {

        if(this.props.products.data != undefined) {

            return (
                <Container>
                    <Table>
                        <ListHeadings columns={['#','Název výrobku','Cena']} />

                    </Table>

                </Container>
            )



        }

       
    }

    render(){

        return (
            <div>

                {this.renderProducts()}
               

            </div>
        )
    }

}