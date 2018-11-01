
import * as actionTypes from './actionTypes';

export const getArticleList = (data) => {
    return {
        type: actionTypes.GET_ARTICLE_LIST,
        data,
    }
}

export const getArticleListStart = (data) => {
    return {
        type: actionTypes.GET_ARTICLE_LIST_START,
        data,
    }
}

export const getArticleListSuccess = (data) => {
    return {
        type: actionTypes.GET_ARTICLE_LIST_SUCCESS,
        data,
    }
}

export const getArticleListFail = (data) => {
    return {
        type: actionTypes.GET_ARTICLE_LIST_FAIL,
        data,
    }
}