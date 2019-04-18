//---------------------------------------------------------------------------------------
// <copyright file="Order-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Order list which consists table with data manipulations (Redux connected component)
//----------------------------------------------------------------------------------------

// React dependency
import * as React from 'react';

import ListTitle from '../common/Page-Title';
import ListContainer from '../common/crud/read/List-Container';
import { ListItemType } from '../../typescript/enums/crud/List-Item-Type';
import { toCrudData } from '../../helpers/components/crudHelper';

// Create operation
import ListItemCreation from '../common/crud/create/List-Item-Creation';


interface IOrderListProps {
    actions:{
        getOrders: Function // fetching list of orders
    }
    orders: any, // list of orders
}


export default class OrdertList extends React.Component<IOrderListProps, any> {

    componentWillMount() {
        this.props.actions.getOrders();
    }

    render(){
        return (
            <div>
                <ListTitle crud>Evidence objednávek</ListTitle>
                <ListItemCreation createMethod={() => 4} type={ListItemType.Order} />
                <ListContainer
                data={ toCrudData(this.props.orders) }
                updateMethod = {null}
                deleteMethod ={null} 
                columnNames = {['#','Datum objednávky', 'Zákazník','Výrobky']}
                emptyError = 'Seznam objednávek je prázdný'
                type={ListItemType.Order}
                />
            </div>
        )
    }

}