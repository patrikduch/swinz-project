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
    private price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }
}