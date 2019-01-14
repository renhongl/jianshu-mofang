

import * as actionTypes from './actionTypes';

export default (signUp = null, action) => {
    switch(action.type) {
        case actionTypes.SIGN_UP_START:
            return {...signUp};

        case actionTypes.SIGN_UP_SUCCESS:
            return {...action.data};

        case actionTypes.SIGN_UP_FAIL:
            return {...signUp};
        default:
            return signUp;
    }
}