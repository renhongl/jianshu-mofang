
import * as actionTypes from './actionTypes';



export const signUp = (data) => {
    return {
        type: actionTypes.SIGN_UP,
        data
    }
}

export const signUpStart = () => {
    return {
        type: actionTypes.SIGN_UP_START,
    }
}

export const signUpSuccess = (data) => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS,
        data
    }
}

export const signUpFail = () => {
    return {
        type: actionTypes.SIGN_UP_FAIL,
    }
}