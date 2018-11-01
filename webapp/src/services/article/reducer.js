import * as actionTypes from './actionTypes';

export default (article = null, action) => {
    switch(action.type) {
        case actionTypes.GET_ARTICLE_LIST:
            return {...action.data};

        case actionTypes.GET_ARTICLE_LIST_START:
            return {...action.data};

        case actionTypes.GET_ARTICLE_LIST_SUCCESS:
            return {...action.data};

        case actionTypes.GET_ARTICLE_LIST_FAIL:
            return {...action.data};
        default:
            return article;
    }
}