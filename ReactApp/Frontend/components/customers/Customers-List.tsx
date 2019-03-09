import * as React from 'react';

import { Table } from 'reactstrap';

export default class CustomersList extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.getCustomers();
    }

    getCustomers = () => {

        if (this.props.customers != undefined) {

            return <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Křestní jméno</th>
                        <th>Přijmení</th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.customers.map((arg: any) => {

                        return (

                            <tr>
                                <th scope="row">{arg.id}</th>
                                <td>{arg.firstName}</td>
                                <td>{arg.surname}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        }

        return null;

    }

    render() {
        return (
            <div>
                <p className='customers-title'>Seznam zákazníků</p>
                {this.getCustomers()}
            </div>
        )
    }
}

