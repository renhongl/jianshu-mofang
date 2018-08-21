
import * as actionTypes from './actionTypes';

export const authSignIn = (data) => {
    return {
        type: actionTypes.AUTH_SIGN_IN,
        data
    }
}

export const authSignUp = (data) => {
    return {
        type: actionTypes.AUTH_SIGN_UP,
        data
    }
}

export const authLogOut = (data) => {
    return {
        type: actionTypes.AUTH_LOG_OUT,
        data
    }
}

export const authSignInSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SIGN_IN_SUCCESS,
        data
    }
}