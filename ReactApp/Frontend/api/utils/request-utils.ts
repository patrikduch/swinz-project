// Third party knihovna pro snadné provolávání REST API
import axios from 'axios';

export function newGet (url: string) {
    return axios.get(url);
}

