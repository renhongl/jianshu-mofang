

import * as actionTypes from './actionTypes';

export default (auth = null, action) => {
    switch(action.type) {
        case actionTypes.AUTH_SIGN_IN:
            return {...auth, ...action.data};

        case actionTypes.AUTH_SIGN_UP:
            return {...auth, ...action.data};

        case actionTypes.AUTH_LOG_OUT:
            return {...auth, ...action.data};

        case actionTypes.AUTH_SIGN_IN_SUCCESS:
            return {...auth, ...action.data};

        case actionTypes.AUTH_SIGN_IN_START:
            return {...auth, ...action.data};

        case actionTypes.AUTH_SIGN_IN_FAIL:
            return {...auth, ...action.data};

        default:
            return auth;
    }
}