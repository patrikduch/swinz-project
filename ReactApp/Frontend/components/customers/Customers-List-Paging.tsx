//-----------------------------------------------------------------------
// <copyright file="Customer-List-Paging.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Paging for customers list
//-----------------------------------------------------------------------

import * as React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class CustomerListPaging extends React.Component {
    render() {
        return (
            <Pagination size="sm" aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>

            </Pagination>
        );
    }
}