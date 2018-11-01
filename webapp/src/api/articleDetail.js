

import axios from 'axios';
import URL from '../constants/url.json';

export async function fetchArticleDetail(user) {
    return await axios.get(URL.articleDetail).then(response => {
        return response.data;
    }).catch(e => {
        return e;
    });
}

