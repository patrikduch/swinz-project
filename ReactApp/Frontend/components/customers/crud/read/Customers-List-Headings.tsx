//-----------------------------------------------------------------------
// <copyright file="Customer-List-Headings.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Headings of customers list
//-----------------------------------------------------------------------

import * as React from 'react';

export default () => {

    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Křestní jméno</th>
                <th>Přijmení</th>
                <th>Nárok na slevu</th>
            </tr>
        </thead>
    );
}