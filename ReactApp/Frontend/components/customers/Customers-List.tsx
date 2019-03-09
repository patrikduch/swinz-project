import * as React from 'react';

export default class CustomersList extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.getCustomers();
    }

    getCustomers = () => {

        if (this.props.customers != undefined) {

            return this.props.customers.map((arg: any) => {

                return <p className='customers-list' key={arg.id}>{arg.id}</p>;
            });
        }

        return null;

    }

    render() {
        return (
            <div>
                Customers list
                {this.getCustomers()}
            </div>
        )
    }
}

