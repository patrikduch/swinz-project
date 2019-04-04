//---------------------------------------------------------------------------------------
// <copyright file="Product-List.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Product list which consists table with data manipulations (redux connected component)
//----------------------------------------------------------------------------------------

import * as React from 'react';

import ListTitle from '../../../common/crud/read/List-Title';
import ProductListContainer from '../../../common/crud/read/List-Container';
import ListItemObject from '../../../../helpers/types/List-Item-Object';
import ProductObject from '../../../../helpers/types/Product-Object';

export default class ProductList extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.getProducts();
    }

    transformData = () => {

        const list = new ListItemObject<ProductObject>();
                
        if(this.props.products.data != undefined) {

            this.props.products.data.forEach((arg: any) => {
                const newObj = new ProductObject(arg.name);
                list.objects.push(newObj);
            })

            return list;
        }
    }

    render(){

        return (
            <div>
                <ListTitle>Evidence výrobků</ListTitle>
                <ProductListContainer
                data={ this.transformData() }
                updateMethod = {null}
                deleteMethod ={null} 
                columnNames = {['#','Název výrobku','Cena']}
                />
            </div>
        )
    }

}