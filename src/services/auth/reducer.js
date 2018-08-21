

import * as actionTypes from './actionTypes';

export const reducer = (state = null, action) => {
    switch(action.type) {
        case actionTypes.AUTH_SIGN_IN:
            return {...state, ...action.data};
        case actionTypes.AUTH_SIGN_UP:
            return {...state, ...action.data};
        case actionTypes.AUTH_LOG_OUT:
            return {...state, ...action.data};
        case actionTypes.AUTH_SIGN_IN_SUCCESS:
            return {...state, ...action.data};
        default:
            return {...state, ...action.data};
    }
}