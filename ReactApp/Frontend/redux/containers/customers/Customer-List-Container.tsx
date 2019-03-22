//-------------------------------------------------------------------------
// <copyright file="Customer-List-Container.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux container for Customer list
//-------------------------------------------------------------------------
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// Component on which we apply Redux
import CustomersListComp from '../../../components/customers/crud/read/Customers-List';

// All redux actions that will be sent from container to the specific component
import * as customersActions from '../../actions/customers/customers-actions';

// state interface
import ICustomerListContainerState from '../../../typescript/interfaces/redux/containers/customers/ICustomer-List-Container-State';

// mapping state from reducer to the  specific component
const mapStateToProps = (state: ICustomerListContainerState) => {
    return {
        customers: state.customers.data
    }
}

// mapping actions to the specific component
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(customersActions,dispatch)
    }
}

// Transformed result component with redux applied
const App = connect(mapStateToProps, mapDispatchToProps)(CustomersListComp);

export default App;