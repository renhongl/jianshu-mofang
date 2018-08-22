

import * as actionTypes from './actionTypes';

export default (header = null, action) => {
    switch(action.type) {
        case actionTypes.GET_HOT_SEARCH:
            return {...header, ...action.data};

        case actionTypes.GET_HOT_SEARCH_START:
            return {...header, ...action.data};

        case actionTypes.GET_HOT_SEARCH_SUCCESS:
            return {...header, ...action.data};

        case actionTypes.GET_HOT_SEARCH_FAIL:
            return {...header, ...action.data};

        default:
            return header;
    }
}