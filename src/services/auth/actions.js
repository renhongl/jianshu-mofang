
import * as actionTypes from './actionTypes';


/**user dispatch action */
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




/**api status action */
export const authSignInSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SIGN_IN_SUCCESS,
        data
    }
}

export const authSignInStart = (data) => {
    return {
        type: actionTypes.AUTH_SIGN_IN_START,
        data
    }
}
export const authSignInFail = (data) => {
    return {
        type: actionTypes.AUTH_SIGN_IN_FAIL,
        data
    }
}