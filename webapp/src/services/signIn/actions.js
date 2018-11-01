
import * as actionTypes from './actionTypes';


/**api status action */

export const signIn = (data) => {
    return {
        type: actionTypes.SIGN_IN,
        data
    }
}

export const signInStart = (data) => {
    return {
        type: actionTypes.SIGN_IN_START,
        data
    }
}

export const signInSuccess = (data) => {
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        data
    }
}

export const signInFail = (data) => {
    return {
        type: actionTypes.SIGN_IN_FAIL,
        data
    }
}