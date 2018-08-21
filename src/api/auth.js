

import axios from 'axios';
import URL from '../constants/url.json';

export async function fetchUserInfor(user) {
    const data = await axios.get(URL.signIn).then(response => {
        return filterUser(response.data, user);
    });
    return data;
}

function filterUser(userList, user) {
    return userList.filter((item) => {
        return item.userName === user.userName && item.password === user.password
    });
}
