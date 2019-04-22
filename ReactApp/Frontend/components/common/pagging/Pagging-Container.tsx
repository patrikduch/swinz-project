import * as React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";


export default class PaggingContainer extends React.Component<any, any> {

  switchPage = (pageId: number) => {
    this.props.pager(pageId);
  }
  
  render() {
    
    return (
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink onClick={() => this.switchPage(1)}>1</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink onClick={() => this.switchPage(2)}>2</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink onClick={() => this.switchPage(3)}>3</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink onClick={() => this.switchPage(4)}>4</PaginationLink>
        </PaginationItem>


      </Pagination>
    );
  }
}
