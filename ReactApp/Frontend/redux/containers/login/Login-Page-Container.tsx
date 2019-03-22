//-------------------------------------------------------------------------
// <copyright file="Customer-List-Container.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Redux container for Login page
//-------------------------------------------------------------------------
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// Component on which we apply Redux
import LoginPageComponent from '../../../pages/login/Login-Page';

// All redux actions that will be sent from container to the specific component
import * as usersActions from '../../actions/users/users-actions';

// State interface

import ILoginPageContainerState from '../../../typescript/interfaces/redux/containers/users/ILogin-Page-Container-State';

// mapping state from reducer to the  specific component
const mapStateToProps = (state: ILoginPageContainerState) => {
    return {
        auth: state.auth
    }
}

// mapping actions to the specific component
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(usersActions,dispatch)
    }
}

// Transformed result component with redux applied
const App = connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);

export default App;