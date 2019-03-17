//-------------------------------------------------------------------------
// <copyright file="User-List-Container.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux container for User list
//-------------------------------------------------------------------------
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component on which we apply Redux
import UsersListComp from '../../../components/users/crud/read/User-List';

// All redux actions that will be sent from container to the specific component
import * as userssActions from '../../actions/users/users-actions';

// mapping state from reducer to the  specific component
const mapStateToProps = (state: any) => {
    return {
        users: state.users.data
    }
}

// mapping actions to the specific component
const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(userssActions,dispatch)
    }
}

// Transformed result component with redux applied
const App = connect(mapStateToProps, mapDispatchToProps)(UsersListComp);

export default App;