//-------------------------------------------------------------------------------------------
// <copyright file="Order.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// View model for representation of orders
//--------------------------------------------------------------------------------------------

export default class Order {
    private id: number;
    private creationDate: Date;

    constructor(id: number, creationDate: Date) {
        this.id = id;
        this.creationDate = creationDate;
    }

    get getId() {
        return this.id;
    }

    get GetCreationDate() {
        return this.creationDate;
    }
}