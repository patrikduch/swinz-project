//-------------------------------------------------------------------------
// <copyright file="Customer-List-Container.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux container for Customer list
//-------------------------------------------------------------------------
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component on which we apply Redux
import CustomersAddComp from '../../../components/customers/Customers-Add';

// All redux actions that will be sent from container to the specific component
import {createCustomer} from '../../actions/customers/customers-actions';

// mapping state from reducer to the  specific component
const mapStateToProps = (state: any) => {
    return {
        customers: state.customers.data
    }
}

// mapping actions to the specific component
const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(createCustomer,dispatch)
    }
}

// Transformed result component with redux applied
const App = connect(mapStateToProps, mapDispatchToProps)(CustomersAddComp);

export default App;