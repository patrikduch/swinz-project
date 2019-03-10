//-----------------------------------------------------------------------
// <copyright file="request-utils.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Helper functions for processing requests
//-----------------------------------------------------------------------

import axios from 'axios';

export function newGet (url: string) {
    return axios.get(url);
}

export function deleteRequest(url: string) {

    try {

        return axios.delete(url).catch(() => {

            return 'aa';
        })


    } catch (err) {


    }
    
    
}

