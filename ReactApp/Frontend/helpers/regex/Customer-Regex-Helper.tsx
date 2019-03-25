//-----------------------------------------------------------------------
// <copyright file="Customers-Regex-Helper.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Regex validation helper for customer form
//-----------------------------------------------------------------------
import * as React from 'react';

export default class CustomerRegexHelper {

    static firstNameRegex(input: string) {
        const regex = RegExp('^[A-Z][a-z]+$');
        if (!regex.test(input)) {
          return <p>Zkontrolujte format vaseho krestniho jmena</p>
        }
        if (input.length >= 1 && input.length < 3) {
          return <p>Zadejte delší křestní jméno</p>;
        }
    }
}