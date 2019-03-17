

// HOC authentication component
import *  as React from 'react';

import Api from '../../api/endpoints/UserApi';

import Cookies from 'cookies-js';

const Test = (props: any) => {

    class Hoc extends React.Component<any, any> {

        state = {
            tokenString : ''
        }

        async componentDidMount() {

            const test = await Api.isAuthenticated({

                TokenString: Cookies.get('auth')
                
            })

            this.setState({
                tokenString: test.data.tokenString
            })
        }


        render() {
            return (
                <div>
                    {
                        this.state.tokenString != '' ? props.children : <div> Prihlasit se </div>
                    }
                </div>
            )
        }
    }

    return <Hoc/>;
}

export default Test;