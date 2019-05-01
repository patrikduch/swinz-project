//-------------------------------------------------------------------------
// <copyright file="Admin-Auth.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Authorization admin hoc component
//-------------------------------------------------------------------------

import * as React from 'react';
import Api from '../../api/endpoints/UserApi';
import Cookies from 'cookies-js';
import Async from 'react-promise'

// Admin Success component
import AdminAuthSuccess from '../../components/admin/auth/Admin-Auth-Success';

// Admin auth failed component
import AdminAuthFail from '../../components/admin/auth/Admin-Auth-Fail';

import IAdminAuthProps from '../../typescript/interfaces/hoc/authentification/IAdmin-Auth-Props';
import { Redirect } from 'react-router';


//import StatsDecision from 'Frontend/components/stats/Stats-Decision';

import { withRouter } from 'react-router-dom';


const AdminAuth = (props: any) => {

    class Hoc extends React.Component<any, any> {
        
        state = {
            tokenString: '',
            isAuthenticated: false
        }

        authPromise = Api.isAuthenticated({
            TokenString: Cookies.get('auth')
        });

        render() {
            return (
                <div>
                   <Async catch={() => <AdminAuthFail isNav={props.isNav} />}
                        promise={this.authPromise} then={(val) => 
                        <AdminAuthSuccess nestedChildren={props.children} isNav={props.isNav} input={val.data}/>
                        } />
                </div>
            )
        }
    }

    if(props.location.pathname != '/login') {

        return <Hoc/>
       
    }

    const Component = withRouter(Hoc);

    return <Component/>;
}

export default AdminAuth;