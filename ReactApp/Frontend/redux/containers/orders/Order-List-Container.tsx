//-------------------------------------------------------------------------
// <copyright file="Order-List-Container.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux container for list of orders
//-------------------------------------------------------------------------
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// Component on which we apply Redux
import OrderListComp from '../../../components/orders/Order-List';

// All redux actions that will be sent from container to the specific component
import * as orderActions from '../../actions/orders/order-actions';

// State interface



// mapping state from reducer to the  specific component
const mapStateToProps = (state: any ) => {
    return {
        orders: state.orders.data
    }
}

// mapping actions to the specific component
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(orderActions,dispatch)
    }
}

// Transformed result component with redux applied
const App = connect(mapStateToProps, mapDispatchToProps)(OrderListComp);

export default App;