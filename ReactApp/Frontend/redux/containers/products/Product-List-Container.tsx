//-------------------------------------------------------------------------
// <copyright file="Product-List-Container.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux container for Product list
//-------------------------------------------------------------------------
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// Component on which we apply Redux
import ProductListComp from '../../../components/products/Product-List';

// All redux actions that will be sent from container to the specific component
import * as productActions from '../../actions/products/products-actions';

// state interface
//import ICustomerListContainerState from '../../../typescript/interfaces/redux/containers/customers/ICustomer-List-Container-State';

// mapping state from reducer to the  specific component
const mapStateToProps = (state: any) => {
    return {
        products: state.products
    }
}

// mapping actions to the specific component
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(productActions,dispatch)
    }
}

// Transformed result component with redux applied
const App = connect(mapStateToProps, mapDispatchToProps)(ProductListComp);

export default App;