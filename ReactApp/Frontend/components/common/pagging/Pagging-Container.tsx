import * as React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


import ProductApi from '../../../api/endpoints/ProductApi';


export default class PaggingContainer extends React.Component<any, any> {

  switchPage = (pageId: number) => {
    this.props.pager(pageId);
  }

  state = {
    pageCount: 0
  }

  createPagination = () => {

    const resultArray = new Array<React.ReactElement>();
    
    if (this.state.pageCount != null) {

      for(let i = 0; i< this.state.pageCount; i++) {
        const item = i+1;
        resultArray[i] = <PaginationItem key={item}>
        <PaginationLink onClick={() => this.switchPage(item)}>{item}</PaginationLink>
      </PaginationItem>
      }

    }

    return resultArray;

  }

  componentDidMount() {

    ProductApi.getProductPagination().then((res => {
      
      this.setState({
        pageCount: res.data.pageCount
      })
    })).then(() => {

      

    });

  
  }
  
  render() {

    
    return (
      <Pagination aria-label="Page navigation example">
        {this.createPagination()}

      </Pagination>
    );
  }
}
