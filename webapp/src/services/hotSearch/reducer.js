

import * as actionTypes from './actionTypes';

export default (hotSearch = null, action) => {
    switch(action.type) {
        case actionTypes.GET_HOT_SEARCH:
            return {...hotSearch, ...action.data};

        case actionTypes.GET_HOT_SEARCH_START:
            return {...hotSearch, ...action.data};

        case actionTypes.GET_HOT_SEARCH_SUCCESS:
            return {...hotSearch, ...action.data};

        case actionTypes.GET_HOT_SEARCH_FAIL:
            return {...hotSearch, ...action.data};

        default:
            return hotSearch;
    }
}