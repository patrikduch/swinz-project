//-------------------------------------------------------------------------------------------
// <copyright file="Product.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// View model for representation of products
//--------------------------------------------------------------------------------------------

export default class Product {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }
}