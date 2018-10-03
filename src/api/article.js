

import axios from 'axios';
import URL from '../constants/url.json';

export async function fetchArticleList(user) {
    return await axios.get(URL.article).then(response => {
        return response.data;
    }).catch(e => {
        return e;
    });
}

