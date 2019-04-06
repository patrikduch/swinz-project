//-------------------------------------------------------------------------------------------
// <copyright file="Customer.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// View model for representation of customers
//--------------------------------------------------------------------------------------------

export default class Customer {
    private id: number;
    private firstname: string;
    private lastname : string;

    constructor(id: number, firstname: string, lastname: string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get getId() {
        return this.id;
    }

    get getFirstname() {
        return this.firstname;
    }

    get getLastname() {
        return this.lastname;
    }
}