

import * as actionTypes from './actionTypes';

export const getArticleDetail = (data) => {
    return {
        type: actionTypes.GET_ARTICLE_DETAIL,
        data,
    }
}

export const getArticleDetailStart = (data) => {
    return {
        type: actionTypes.GET_ARTICLE_DETAIL_START,
        data,
    }
}

export const getArticleDetailSuccess = (data) => {
    return {
        type: actionTypes.GET_ARTICLE_DETAIL_SUCCESS,
        data,
    }
}

export const getArticleDetailFail = (data) => {
    return {
        type: actionTypes.GET_ARTICLE_DETAIL_FAIL,
        data,
    }
}