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
    private isDeleted: boolean;

    constructor(id: number, name: string, price: number, isDeleted: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isDeleted = isDeleted;
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

    get getIsDeleted() {
        return this.isDeleted;
    }
}