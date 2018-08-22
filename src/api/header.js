

import axios from 'axios';
import URL from '../constants/url.json';

export async function fetchHotSearch(user) {
    return await axios.get(URL.hotSearch).then(response => {
        return response.data;
    }).catch(e => {
        return e;
    });
}

