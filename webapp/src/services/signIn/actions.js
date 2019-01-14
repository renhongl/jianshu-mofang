
import * as actionTypes from './actionTypes';


/**api status action */

export const signIn = (data) => {
    return {
        type: actionTypes.SIGN_IN,
        data
    }
}

export const signInStart = () => {
    return {
        type: actionTypes.SIGN_IN_START,
    }
}

export const signInSuccess = (data) => {
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        data
    }
}

export const signInFail = () => {
    return {
        type: actionTypes.SIGN_IN_FAIL,
    }
}