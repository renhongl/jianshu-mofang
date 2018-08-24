

import * as actionTypes from './actionTypes';

export const getHotSearch = (data) => {
    return {
        type: actionTypes.GET_HOT_SEARCH,
        data
    }
}

export const getHotSearchStart = (data) => {
    return {
        type: actionTypes.GET_HOT_SEARCH_START,
        data
    }
}

export const getHotSearchSuccess = (data) => {
    return {
        type: actionTypes.GET_HOT_SEARCH_SUCCESS,
        data
    }
}

export const getHotSearchFail = (data) => {
    return {
        type: actionTypes.GET_HOT_SEARCH_FAIL,
        data
    }
}