//---------------------------------------------------------------------------------------
// <copyright file="Product-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Product list which consists table with data manipulations (Redux connected component)
//----------------------------------------------------------------------------------------

// React dependency
import * as React from 'react';

import ListTitle from '../common/crud/read/List-Title';
import ListContainer from '../common/crud/read/List-Container';
import ListItemObject from '../../helpers/types/List-Item-Object';

// Create operation
import ListItemCreation from '../common/crud/create/List-Item-Creation';

import ProductObject from '../../view-models/Product';
import { ListItemType } from '../../typescript/enums/crud/List-Item-Type';

export default class ProductList extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.getProducts();
    }

    transformData = () => {
        const list = new ListItemObject<ProductObject>();
        if(this.props.products.data != undefined) {
            this.props.products.data.forEach((arg: {id: number, name: string, price: number}) => {
                const newObj = new ProductObject(arg.id, arg.name, arg.price);
                list.objects.push(newObj);
            })
            return list;
        }
    }

    render(){

        return (
            <div>
                <ListTitle>Evidence výrobků</ListTitle>
                <ListItemCreation createMethod={this.props.actions.createProduct} type={ListItemType.Product} />
                <ListContainer
                data={ this.transformData() }
                updateMethod = {this.props.actions.updateProduct}
                deleteMethod ={this.props.actions.deleteProduct} 
                columnNames = {['#','Název výrobku','Cena']}
                emptyError = 'Seznam výrobků je prázdný'
                type={ListItemType.Product}
                />
            </div>
        )
    }

}