//-------------------------------------------------------------------------------------------
// <copyright file="Order.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// View model for representation of orders
//--------------------------------------------------------------------------------------------

export default class Order {
    private id: number;


    constructor(id: number) {
        this.id = id;

    }

    get getId() {
        return this.id;
    }
}