

import axios from 'axios';
import URL from '../constants/url.json';

export async function fetchUserInfor(user) {
    let postData = {
        user_name: user.userName,
        password_hash: user.password,
    };
    return await axios.post(URL.signIn, postData).then(response => {
        return response.data;
    }).catch(e => {
        return e;
    });
}

