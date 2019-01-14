

import axios from 'axios';
import URL from '../constants/url.json';

export async function createUser(user) {
    let postData = {
        user_name: user.userName,
        password_hash: user.password,
        mail: user.email,
    };
    return await axios.post(URL.register, postData).then(response => {
        debugger;
        return response.data;
    }).catch(e => {
        return e;
    });
}

