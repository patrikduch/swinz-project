//-------------------------------------------------------------------------
// <copyright file="Admin-Auth.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Authorization admin hoc component
//-------------------------------------------------------------------------

import *  as React from 'react';

import Api from '../../api/endpoints/UserApi';
import Cookies from 'cookies-js';

import Async from 'react-promise'

// Admin Success component
import AdminAuthSuccess from '../../components/admin/auth/Admin-Auth-Success';

// Admin auth failed component
import AdminAuthFail from '../../components/admin/auth/Admin-Auth.Fail';


const AdminAuth = (props: any) => {

    class Hoc extends React.Component<any, any> {

        state = {
            tokenString: ''
        }

        logout = () => {
            Cookies.expire('auth');
        }

        authPromise = Api.isAuthenticated({
            TokenString: Cookies.get('auth')
        });


        render() {
            return (
                <div>
                    <Async catch={() => <AdminAuthFail isNav={props.isNav} />}
                        promise={this.authPromise} then={(val) => <AdminAuthSuccess nestedChildren={props.children} isNav={props.isNav} input={val.data}/>
                        } />
                </div>
            )
        }
    }

    return <Hoc />;
}

export default AdminAuth;