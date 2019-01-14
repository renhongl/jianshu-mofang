

import * as actionTypes from './actionTypes';

export default (signIn = null, action) => {
    switch(action.type) {
        case actionTypes.SIGN_IN_START:
            return {...signIn};

        case actionTypes.SIGN_IN_SUCCESS:
            return {...action.data};

        case actionTypes.SIGN_IN_FAIL:
            return {...signIn};
        default:
            return signIn;
    }
}