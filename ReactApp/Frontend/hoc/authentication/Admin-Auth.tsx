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

import { Link } from 'react-router-dom';

import Async from 'react-promise'
import Button from 'reactstrap/lib/Button';



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
                    <Async catch={(err) => {

                        if (props.isNav) {
                            return (
                                <div>
                                    <Link to='/login'>Administrace</Link>
                                </div>
                            )
                        }

                        return null;
                    }}

                        promise={this.authPromise} then={(val) => {

                            if (val.data.tokenString != '' && props.isNav) { // Content in navigation for admin users
                                return <div>
                                    <div>
                                        <Button onClick={this.logout}>Odhlasit</Button>
                                    </div>

                                    {props.children}
                                </div>
                            } else if (!props.isNav) {

                                return props.children;

                            }
                        }

                        } />
                </div>
            )
        }
    }

    return <Hoc />;
}

export default AdminAuth;